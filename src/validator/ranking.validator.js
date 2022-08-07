class Ranking {
  constructor(msg, chat, autor, repository) {
    this.msg = msg;
    this.chat = chat;
    this.autor = autor;
    this.srt = this.strToArray(this.msg);
    this.command = this.strToArray(this.msg)[0];
    this.repository = repository;
  }
  strToArray(cmdString) {
    return cmdString.split(" ");
  }
  async register() {
    const name = this.srt[1];
    try {
      if (await this.isRegistered()) {
        throw new Error("Usuário já registrado");
      }

      await this.repository.RegisterUser({
        userID: this.autor,
        name: name,
        score: 0,
        streak: 0,
      });
      await this.chat.sendMessage(`${name}, você entrou no ranking`);
    } catch (error) {
      await this.chat.sendMessage(`${name}, você entrou no ranking`);
      console.log(error);
    }
  }

  async isRegistered() {
    const user = await this.repository.findByID(this.autor);
    if (user.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  async updateScore() {
    try {
      const user = await this.repository.findByID(this.autor);
      if (!(await this.isRegistered())) {
        throw new Error("Usuário não registrado");
      }
      await this.repository.UpdateScore({
        id: this.autor,
        score: user.score + 1,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Ranking;
