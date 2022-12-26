const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
require("dotenv").config();
const packageJson = require("./package.json");

// Socket Server
/*******************************************************/
const chatServer = require("./server/chat");
const chatIO = chatServer(httpServer);

// Middleware
/*******************************************************/
// logger
const logger = require("socket.io-logger")();
chatIO.use(logger);

httpServer.listen(packageJson.port, () => {
  console.log(`Server listening on port ${packageJson.port}`);
});
