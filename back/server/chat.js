const io = require("socket.io");
const {
  joinRoomEvent,
  leaveRoomEvent,
  sendMsg,
  disconnect,
} = require("../events/index");

const chatServer = (server) => {
  const ioServer = io(server, {
    origins: "http://localhost:8080:*",
  });

  ioServer.on("connection", (socket) => {
    console.log("A user connected");
    joinRoomEvent(socket);
    leaveRoomEvent(socket);
    sendMsg(socket);
    disconnect(socket);
  });

  return ioServer;
};

module.exports = chatServer;
