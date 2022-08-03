const { simpleCommand, appCommand } = require("../helper/is-command.helper");
module.exports = class MsgController {
  constructor(sc_service, app) {
    this.sc.service = sc_service;
    this.app = app;
  }

  async handle(msg) {
    if (simpleCommand(msg)) {
      await this.sc.service.handle(msg);
    }
    if (appCommand(msg)) {
      await this.app.handle(msg);
    }
  }
};
