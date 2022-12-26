const sendMsg = (socket) => {
  socket.on("send message", (room, message) => {
    console.log(`Received message from user in room ${room}: ${message}`);
    ioServer.to(room).emit("received message", message);
  });
};

module.exports = sendMsg;
