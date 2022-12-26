const disconnect = (socket) => {
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
};

module.exports = disconnect;
