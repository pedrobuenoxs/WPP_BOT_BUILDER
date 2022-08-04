const simpleCommands = ["!salve", "!fut", "!foto", "!uuui", "!commands"];
const appCommands = [
  "!help",
  "!entrar",
  "!editar",
  "!sair",
  "!ranking",
  "!ban",
  "!pontuar",
  "!titulo",
];

const command = (cmdString) => cmdString.split(" ")[0];

const simpleCommand = (cmdString) =>
  simpleCommands.includes(command(cmdString));

const appCommand = (cmdString) => appCommands.includes(command(cmdString));

module.exports = { simpleCommand, appCommand };
