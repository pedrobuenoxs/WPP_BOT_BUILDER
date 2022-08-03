module.exports = class SimpleCommandsService {
  async handle(msg) {
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
  }
};
