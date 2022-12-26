const leaveRoomEvent = (socket) => {
  socket.on("leave room", (room) => {
    console.log(`User left room ${room}`);
    socket.leave(room);
  });
};

module.exports = leaveRoomEvent;
