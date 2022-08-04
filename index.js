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

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  const grupo = msg._patch;
  const autor = msg.author;

  await controller.handle(msg, chat, autor);
});

client.initialize();
