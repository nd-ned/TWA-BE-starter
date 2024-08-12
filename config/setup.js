"use strict";

function initialize() {
  console.log(
    "\x1b[34m",
    `Initialization complete! The app is running on port: ${process.env.PORT}`
  );
}

module.exports = {
  initialize,
};
