const express = require("express");
const path = require("path");
require("dotenv").config();
const { get } = require("env-var");

const envs = {
  PORT: get("PORT").required().asPortNumber(),
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
};

module.exports = { envs };
