module.exports = class SimpleCommandsService {
  async handle(msg, chat) {
    if (msg == "!salve") {
      await chat.sendMessage(`Salve mlkote`);
    }

    if (msg == "!fut") {
      await chat.sendMessage(`é hoje que o pilas toma uma canetinha`);
    }

    if (msg == "!foto") {
      await chat.sendMessage(`sem foto sem ponto`);
    }
    if (msg == "!uuui") {
      await chat.sendMessage("Ele gosxtaaa");
    }
    if (msg == "!horas") {
      await chat.sendMessage("Agora são 6 e ônibus");
    }
    if (msg == "!commands") {
      await chat.sendMessage(
        `!commands\n!salve\n!fut\n!foto\n!uuui\n!ranking\n!entrar\n!editar\n!sair\n!ban\n!pontuar\n!titulo\n!horas`
      );
    }
  }
};
