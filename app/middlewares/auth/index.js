"use strict";

const querystring = require("querystring");

const AuthService = require("../../services/AuthService");
const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      try {
        const initData = querystring.parse(token);

        if (AuthService.verifyTelegramAuth(initData)) {
          const telegramUser = JSON.parse(initData.user);

          let user = await User.findOne({
            telegram_id: telegramUser.id,
          });

          if (!user) {
            const userId = await User.create({
              telegram_id: telegramUser.id,
              username: telegramUser.username,
              first_name: telegramUser.first_name,
              last_name: telegramUser.last_name,
              language_code: telegramUser.language_code,
            });

            user = await User.findById(userId);
          }

          req.auth = {
            initData,
            telegramUser,
            user,
          };
        }
      } catch (e) {
        console.warn("auth middleware error", e);

        return res.apiUnauthorized("Authorization failed!");
      }
    }

    next();
  } catch (e) {
    console.error("500 auth middleware error", e);
    next(e);
  }
};
