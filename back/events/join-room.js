const joinRoomEvent = (socket) => {
  socket.on("join room", (room) => {
    console.log(`User with ID of ${socket.id} joined room ${room}`);
    socket.join(room);
  });
};

module.exports = joinRoomEvent;
