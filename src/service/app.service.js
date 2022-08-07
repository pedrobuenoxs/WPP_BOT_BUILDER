const UserRepository = require("../db/user.repository");
const repository = new UserRepository();
const Ranking = require("../validator/ranking.validator");

module.exports = class App {
  async handle(msg, chat, autor) {
    const ranking = new Ranking(msg, chat, autor, repository);
    const strToArray = (cmdString) => cmdString.split(" ");
    const commandArray = strToArray(msg);
    const command = commandArray[0];

    if (command == "!entrar") {
      await ranking.register();
    }
  }
};
