const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const MsgController = require("./src/controller/msg.controller");
const SimpleCommandsService = require("./src/service/simple-commands.service");
const AppService = require("./src/service/app.service");

const service = new SimpleCommandsService();
const app = new AppService();
const controller = new MsgController(service, app);

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  console.log("----------------------------------------------------");
  console.log(chat);
  console.log("----------------------------------------------------");
  console.log(await msg.getContact());
  console.log("----------------------------------------------------");
  const contact = await msg.getContact();
  const user_id = contact.id._serialized;
  console.log("Serialized id -->", user_id);

  const author = msg.from;

  const msgID = msg.id;
  // const userID = msgID.participant;
  // console.log("Phone number -->", userID);

  const body = msg.body;
  const date = msg.timestamp;
  const isGroup = chat.isGroup;
  const isMedia = msg.isMedia;
  const isMentioned = msg.isMentioned;
  const isSentByMe = msg.isSentByMe;
  const isSeen = msg.isSeen;
  const isSticker = msg.isSticker;
  // console.log("Title -->", chat.name); //
  // console.log("isGroup -->", isGroup);
  // console.log("Author -->", author);
  // console.log("Message -->", body);
  // console.log("date -->", date);
  // console.log("isMedia -->", isMedia);
  // console.log("isMentioned -->", isMentioned);
  // console.log("isSentByMe -->", isSentByMe);
  // console.log("isSeen -->", isSeen);
  // console.log("isSticker -->", isSticker);
  // console.log("----------------------------------------------------");

  if (isGroup) {
    //{user_id: }
    await controller.handle(msg, chat, user_id);
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});

require("dotenv").config();

const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Error while connecting database::", err);
  });
