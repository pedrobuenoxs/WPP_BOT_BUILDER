const { simpleCommand, appCommand } = require("../helper/is-command.helper");
module.exports = class MsgController {
  constructor(service, app) {
    this.service = service;
    this.app = app;
  }

  async handle(msg, chat) {
    if (simpleCommand(msg.body)) {
      await this.service.handle(msg.body, chat);
    }
    if (appCommand(msg.body)) {
      await this.app.handle(msg.body, chat);
    }
  }
};
