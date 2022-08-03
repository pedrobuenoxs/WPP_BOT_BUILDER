module.exports = class MsgController {
  constructor(service) {
    this.service = service;
  }

  async handle(msg) {
    await this.service.handle(msg);
  }
};
