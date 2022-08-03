const simpleCommands = ["!salve", "!fut", "!foto"];
const appCommands = [
  "!help",
  "!entrar",
  "!editar",
  "!sair",
  "!ranking",
  "!ban",
];

const command = (cmdString) => cmdString.split(" ")[0];

const simpleCommand = (cmdString) =>
  simpleCommands.includes(command(cmdString));

const appCommand = (cmdString) => appCommands.includes(command(cmdString));

module.exports = { simpleCommand, appCommand };

console.log(simpleCommand("salve"));
console.log(appCommand("!help"));
