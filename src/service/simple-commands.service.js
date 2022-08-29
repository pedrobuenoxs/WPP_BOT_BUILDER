const motivacao = [
  "se voce nao for só voce nao vai",
  "A nat ja foi e voce?",
  "Cada segundo de esforço vale a pena, força",
  "Treinar é viver",
  "Pode ser feio, pode ser frango, só nao pode ser feio e frango",
  "No inicio motivação, no meio paciencia, no fim satisfação",
  "A preguiça enfraquece, a motivação enobrece",
  "Hora de descansar com um sentimento de missão cumprida",
  "Um peso de cada vez e logo voce estara superando todos os seus limites",
  "O corpo alcança o que a mente acredita",
  "Coloque a preguiça pra correr",
  "O que nao se faz, nao se aprende",
  "Pernas bambas, falta de ar e transpiração, é sexo? NAO! ACADEMIA!",
  "hora do wheyzinhuuuuuuuuuuu hmmmmmmmmmmmmm",
];

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
  "Cara de cú com caimbra",
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
    if (msg == "!motivacao") {
      await chat.sendMessage(
        `${motivacao[Math.floor(Math.random() * motivacao.length)]}`
      );
    }
    if (msg == "!comandos") {
      await chat.sendMessage(
        "Disponiveis:\n!salve\n!foto\n!uuui\n!horas\n!beach"
      );
    }
  }
};
