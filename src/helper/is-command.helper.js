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

const isSimpleCommand = (cmdString) =>
  simpleCommands.includes(command(cmdString));

const isAppCommand = (cmdString) => appCommands.includes(command(cmdString));

module.exports = { isSimpleCommand, isAppCommand };
