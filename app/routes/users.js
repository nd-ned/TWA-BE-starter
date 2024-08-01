"use strict";

const express = require("express");
const router = express.Router();
const AuthHandler = require("../middlewares/auth/Handler");
const UserController = require("../controllers/http/api/UserController");

router.get("/", [AuthHandler.requireAuth, UserController.getAll]);

module.exports = router;
