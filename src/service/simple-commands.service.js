const xingamentos = [
  "Pau no cu",
  "Filho da puta",
  "Pobre",
  "Estagiário",
  "Boquinha de veludo",
  "Arrombado",
  "Inimigo do humor",
  "Bafo de bunda",
  "Metralhadora de bosta",
  "Cara de cú com caiâmbra",
  "Eleitor do Bolsonaro",
  "Calvo",
  "Lixo",
  "Desempregado",
  "Mão de vaca",
  "Inimigo da moda",
  "Barriga de cadela prenha",
  "Umbigudo fedorento",
  "Merda",
  "Porco imundo",
  "Sapão",
  "Shrek branco",
];

const nomesXingamentos = [
  "Durdo",
  "Bis",
  "Pokasombra",
  "Gustavinho",
  "Leozinho",
  "Bolsonaro",
];

module.exports = class SimpleCommandsService {
  async handle(msg, chat) {
    if (msg == "!salve") {
      await chat.sendMessage(`Salve mlkote`);
    }
    if (msg == "!foto") {
      await chat.sendMessage(`sem foto sem ponto`);
    }
    if (msg == "!beach") {
      await chat.sendMessage("Beach tennis não vale em");
    }
    if (msg == "!uuui") {
      await chat.sendMessage("Ele gosxtaaa");
    }
    if (msg == "!horas") {
      await chat.sendMessage("Agora são 6 e ônibus");
    }
    if (msg == "!xingar") {
      await chat.sendMessage(
        `${
          nomesXingamentos[Math.floor(Math.random() * nomesXingamentos.length)]
        } seu ${xingamentos[Math.floor(Math.random() * xingamentos.length)]}`
      );
    }
    if (msg == "!comandos") {
      await chat.sendMessage(
        "Disponiveis:\n!salve\n!foto\n!uuui\n!horas\n!beach"
      );
    }
  }
};
console.log(
  `${
    nomesXingamentos[Math.floor(Math.random() * nomesXingamentos.length)]
  } seu ${xingamentos[Math.floor(Math.random() * xingamentos.length)]}`
);
