"use strict";

const crypto = require("crypto");

class AuthService {
  static verifyTelegramAuth = (dataObj) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("Skipping telegram auth verification in development mode");
      return true;
    }

    const secretKey = crypto
      .createHmac("sha256", "WebAppData")
      .update(process.env.TELEGRAM_BOT_TOKEN)
      .digest();

    const checkString = Object.keys(dataObj)
      .filter((key) => key !== "hash")
      .sort()
      .map((key) => `${key}=${dataObj[key]}`)
      .join("\n");

    const hash = crypto
      .createHmac("sha256", secretKey)
      .update(checkString)
      .digest("hex");

    return hash === dataObj.hash;
  };
}

module.exports = AuthService;
