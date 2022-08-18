const qrcode = require("qrcode-terminal");
const { Client, RemoteAuth } = require("whatsapp-web.js");
const MsgController = require("./src/controller/msg.controller");
const SimpleCommandsService = require("./src/service/simple-commands.service");
const AppService = require("./src/service/app.service");
const service = new SimpleCommandsService();
const app = new AppService();
const controller = new MsgController(service, app);
const http = require("http");

require("dotenv").config();
const server = require("./server");
server.set("port", process.env.PORT || 3000);

const mongoose = require("mongoose");
const { MongoStore } = require("wwebjs-mongo");
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => {
    const store = new MongoStore({ mongoose: mongoose });
    const client = new Client({
      authStrategy: new RemoteAuth({
        store: store,
        backupSyncIntervalMs: 300000,
      }),
      puppeteer: {
        args: ["--no-sandbox"],
      },
    });
    console.log("Db connected");
    client.initialize();

    client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on("ready", () => {
      console.log("Client is ready!");
    });

    client.on("message", async (msg) => {
      const chat = await msg.getChat();
      const contact = await msg.getContact();
      const user_id = contact.id._serialized;
      const isGroup = chat.isGroup;

      if (isGroup) {
        await controller.handle(msg, chat, user_id);
      }
    });

    client.on("disconnected", (reason) => {
      console.log("Client was logged out", reason);
    });
  })
  .catch((err) => {
    console.log("Error while connecting database::", err);
  });
