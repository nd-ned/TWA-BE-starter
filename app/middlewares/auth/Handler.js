"use strict";

class Handler {
  static async requireAuth(req, res, next) {
    try {
      if (!req.auth) {
        return res.apiUnauthorized("Authorization required!");
      }
    } catch (e) {
      console.error("auth middleware error", e);

      return res.apiUnauthorized("Unauthorized!");
    }

    next();
  }
}

module.exports = Handler;
