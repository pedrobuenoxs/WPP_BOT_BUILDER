const { GroupChat } = require("whatsapp-web.js");

module.exports = class App {
  async handle(msg, chat, autor) {
    const strToArray = (cmdString) => cmdString.split(" ");
    const commandArray = strToArray(msg);
    const command = commandArray[0];

    if (command == "!help") {
      await chat.sendMessage(
        `!entrar - Entra no ranking\n!editar - Edita o seu nome\n!sair - Sai do ranking [vai perder os pontos bobão]\n!ranking - Ranking atualizado\n!ban - Bane um usuário do grupo`
      );
    }

    if (command == "!titulo") {
      try {
        if (autor == "5519995790911@c.us") {
          const auxTitle = commandArray.slice(1, commandArray.length).join(" ");
          await chat.setSubject(auxTitle);
        } else {
          await chat.sendMessage("você não bobão");
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (command == "!entrar") {
      await chat.sendMessage(`alá o financiador da h7!`);
    }

    if (command == "!editar") {
      await chat.sendMessage(`decida-se, amigo!`);
    }

    if (command == "!sair") {
      await chat.sendMessage(`:(`);
    }

    if (command == "!ranking") {
      await chat.sendMessage(`calmô!`);
    }

    if (command == "!ban") {
      await chat.sendMessage(`durdo ou bis?`);
    }
    if (command == "!pontuar") {
      await chat.sendMessage(`beach tennis não vale em`);
    }
  }
};
