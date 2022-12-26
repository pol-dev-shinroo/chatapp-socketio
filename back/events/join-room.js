const joinRoomEvent = (socket) => {
  socket.on("join room", (room) => {
    console.log(`User joined room ${room}`);
    socket.join(room);
  });
};

module.exports = joinRoomEvent;
