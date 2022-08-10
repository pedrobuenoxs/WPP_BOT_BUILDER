const simpleCommands = ["!salve", "!fut", "!foto", "!uuui", "!commands"];
const appCommands = [
  "!ajuda",
  "!entrar",
  "!editar",
  "!sair",
  "!ranking",
  "!ban",
  "!pontuar",
  "!streak",
];

const command = (cmdString) => cmdString.split(" ")[0];

const isSimpleCommand = (cmdString) =>
  simpleCommands.includes(command(cmdString));

const isAppCommand = (cmdString) => appCommands.includes(command(cmdString));

module.exports = { isSimpleCommand, isAppCommand };
