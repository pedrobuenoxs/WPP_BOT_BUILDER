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
    if (msg.body == "!uuui") {
      await chat.sendMessage("Ele gosxtaaa");
    }
    if (msg.body == "!commands") {
      await chat.sendMessage(`!salve\n!fut\n!foto\n!uuui\n!commands`);
    }
  }
};
