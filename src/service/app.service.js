const UserRepository = require("../db/user.repository");
const repository = new UserRepository();
const Ranking = require("../validator/ranking.validator");

module.exports = class App {
  async handle(msg, chat, user_id) {
    const strToArray = (cmdString) => cmdString.split(" ");
    const commandArray = strToArray(msg);
    const command = commandArray[0].toLowerCase();

    if (command == "!entrar") {
      const name = commandArray[1];

      const ranking = new Ranking(msg, chat, user_id, name, repository);
      try {
        if (name == undefined) {
          throw new Error("Digite seu nome");
        }
        await ranking.join();
        chat.sendMessage("tá saindo da jaula o monstro.");
      } catch (error) {
        chat.sendMessage(`Atenção: ${error.message}!`);
      }
    }

    if (command == "!pontuar") {
      const ranking = new Ranking(msg, chat, user_id, "", repository);
      try {
        const newScore = await ranking.updateScore();
        chat.sendMessage(`birrrl! Você tem ${newScore} pontos!`);
      } catch (error) {
        chat.sendMessage(`Atenção: ${error.message}!`);
      }
    }

    if (command == "!ranking") {
      const ranking = new Ranking(msg, chat, user_id, "", repository);
      try {
        const data = await ranking.createRank();
        chat.sendMessage(data);
      } catch (error) {
        chat.sendMessage(`Atenção: ${error.message}!`);
      }
    }

    if (command == "!streak") {
      const ranking = new Ranking(msg, chat, user_id, "", repository);
      try {
        const data = await ranking.getStreak();
        chat.sendMessage(`Você treinou ${data} dias seguidos!`);
      } catch (error) {
        chat.sendMessage(`Atenção: ${error.message}!`);
      }
    }

    if (command == "!ajuda") {
      chat.sendMessage(
        "Comandos disponíveis:\n\n!entrar <Nome> - Entrar no ranking\n!pontuar - Pontuar\n!ranking - Listar o ranking\n!streak - Verificar seu streak"
      );
    }
  }
};
