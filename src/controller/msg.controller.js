const {
  isSimpleCommand,
  isAppCommand,
} = require("../helper/is-command.helper");
module.exports = class MsgController {
  constructor(service, app) {
    this.service = service;
    this.app = app;
  }

  async handle(msg, chat, user_id) {
    // if(isApp)
    if (isSimpleCommand(msg.body)) {
      await this.service.handle(msg.body, chat);
    }
    if (isAppCommand(msg.body)) {
      await this.app.handle(msg.body, chat, user_id);
    }
  }
};
