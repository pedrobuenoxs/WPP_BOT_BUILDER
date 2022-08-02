const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

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
  if (msg.body == "!salve") {
    const chat = await msg.getChat();
    await chat.sendMessage(`Salve mlkote`);
  }

  if (msg.body == "!fut") {
    const chat = await msg.getChat();
    await chat.sendMessage(`é hoje que o pilas toma uma canetinha`);
  }

  if (msg.body == "!foto") {
    const chat = await msg.getChat();
    await chat.sendMessage(`sem foto sem ponto`);
  }
});

client.initialize();
