const moment = require("moment"); // require

const CanScore = (updatedAt, now) => {
  const _updatedAt = moment(updatedAt).format("YYYY-MM-DD HH:mm:ss");
  const dayAgo = moment(now)
    .subtract(20, "hours")
    .format("YYYY-MM-DD HH:mm:ss");

  return dayAgo > _updatedAt;
};

const isStreak = (updatedAt, now) => {
  const canScore = CanScore(updatedAt, now);
  const limitDate = moment(updatedAt)
    .add(2, "days")
    .format("YYYY-MM-DD HH:mm:ss");
  const _now = moment(now).format("YYYY-MM-DD HH:mm:ss");
  const result = limitDate > _now;

  return result;
};

module.exports = { CanScore, isStreak };
