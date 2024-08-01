"use strict";

const express = require("express");

const router = express.Router();
const AuthController = require("../controllers/http/api/AuthController");
const { requireAuth } = require("../middlewares/auth/Handler");

router.get("/me", [requireAuth, AuthController.me]);

module.exports = router;
