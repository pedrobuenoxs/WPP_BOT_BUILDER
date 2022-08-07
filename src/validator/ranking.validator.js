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
      if (await this.isRegistered(this.autor)) {
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
      await this.chat.sendMessage(`${name}, você já entrou no ranking`);
      console.log(error);
    }
  }

  async isRegistered(id) {
    const user = await this.repository.findByID(id);
    if (!user) {
      return false;
    } else {
      return true;
    }
  }

  async increaseScore() {
    try {
      const user = await this.repository.findByID(this.autor);
      if (!(await this.isRegistered(user.userID))) {
        throw new Error("Usuário não registrado");
      }

      const updated = await this.repository.UpdateScore({
        id: this.autor,
        score: user.score + 1,
      });
      await this.chat.sendMessage(
        `${user.name}, você fez ${user.score + 1} pontos`
      );
    } catch (error) {
      await this.chat.sendMessage(`Entre no ranking para pontuar`);
    }
  }

  async makeRanking() {
    let msg = "";
    const users = await this.repository.getData();
    users.forEach((user) => {
      msg += `${user.name} - ${user.score}/100\n`;
    }),
      await this.chat.sendMessage(msg);
  }

  async getData() {
    const users = await this.repository.getData();
    return users
      .map((user) => {
        return {
          name: user.name,
          score: user.score,
          streak: user.streak,
        };
      })
      .sort((a, b) => b.score - a.score);
  }
}

module.exports = Ranking;
