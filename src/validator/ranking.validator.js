var moment = require("moment"); // require
const { CanScore, isStreak } = require("../helper/hours-count.helper"); // require

module.exports = class Ranking {
  constructor(msg, chat, user_id, name, repository) {
    this.msg = msg;
    this.chat = chat;
    this.user_id = user_id;
    this.name = name;
    this.repository = repository;
  }
  async join() {
    try {
      const alreadyJoined = await this.repository.findByID(this.user_id);
      if (alreadyJoined) {
        throw new Error("Você já está cadastrado");
      }
      let now = moment().subtract(3, "hours");
      const user = {
        userID: this.user_id,
        name: this.name,
        score: 0,
        streak: 0,
        createdAt: now,
        updatedAt: now,
      };
      const joinedUser = await this.repository.RegisterUser(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateScore() {
    try {
      const user = await this.repository.findByID(this.user_id);
      const updatedAt = moment(user.updatedAt);
      let now = moment().subtract(3, "hours");
      // const canScore = CanScore(updatedAt, now); \/
      if (user.score === 0 || true) {
        if (isStreak(updatedAt, now)) {
          const updated = await this.repository.UpdateScore({
            id: this.user_id,
            score: user.score + 1,
            streak: user.streak + 1,
          });
          return updated.score;
        } else {
          const updated = await this.repository.UpdateScore({
            id: this.user_id,
            score: user.score + 1,
            streak: 0,
          });
          return updated.score;
        }
      } else {
        throw new Error("Você ainda não pode atualizar seu score");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createRank() {
    try {
      const initMsg = "Ranking:\n";
      const data = await this.repository.getData();
      const sortedData = data.sort((a, b) => b.score - a.score);
      const message = sortedData
        .map((user, index) => {
          if (user.streak >= 2) {
            return `${index + 1} - ${user.name} - ${user.score}/100 (${
              user.streak
            }🔥)`;
          } else {
            return `${index + 1} - ${user.name} - ${user.score}/100`;
          }
        })
        .join("\n");
      return initMsg + message;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getStreak() {
    try {
      const user = await this.repository.findByID(this.user_id);
      return user.streak;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
