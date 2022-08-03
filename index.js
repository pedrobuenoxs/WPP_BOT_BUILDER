const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const MsgController = require("./src/controller/msg.controller");
const SimpleCommandsService = require("./src/service/simple-commands.service");

const service = new SimpleCommandsService();
const controller = new MsgController(service);

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
  await controller.handle(msg);
});

client.initialize();
