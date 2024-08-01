"use strict";

const Base = require("./Base");

class User extends Base {
  constructor() {
    super("users");

    this.columns = [
      "id",
      "telegram_id",
      "username",
      "first_name",
      "last_name",
      "language_code",
    ];
  }
}

module.exports = new User();
