module.exports = class SimpleCommandsService {
  async handle(msg, chat) {
    if (msg.body == "!salve") {
      await chat.sendMessage(`Salve mlkote`);
    }

    if (msg.body == "!fut") {
      await chat.sendMessage(`é hoje que o pilas toma uma canetinha`);
    }

    if (msg.body == "!foto") {
      await chat.sendMessage(`sem foto sem ponto`);
    }
  }
};