"use strict";

class AuthController {
  static async me(req, res, next) {
    try {
      return res.apiOK("User details!", req.auth.user);
    } catch (e) {
      console.error(e);

      next(e);
    }
  }
}

module.exports = AuthController;
