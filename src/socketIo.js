export default function initSocket() {
  const connectionOptions = {
    secure: true,
    timeout: 5000,
    connect_timeout: 5000,
    jsonp: true,
    forceNew: true,
    allowUpgrades: true,
    agent: false
  };

  const socket = io(config.api.hostname, connectionOptions);

  //socket.connect();
  socket.on("connect", () => {
    console.log("connect", socket.id);

  });
  socket.on("connected", () => {
    console.log("connected", socket.connected);
  });
  socket.on("reconnect_failed", () => {
    console.log(socket.connected);
  });
  socket.on("disconnect", reason => {
    console.log("disconnect", reason);
    if (reason === "io server disconnect") {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
    // else the socket will automatically try to reconnect
  });
  socket.on("disconnecting", reason => {
    console.log("disconnecting", reason);
  });
  //console.log(this.socket);
  socket.on("error", error => {
    console.log("error", error);
  });
  // socket.on("connect_error", error => {   console.log("connect_error", error);
  // });
  socket.on("connect_timeout", timeout => {
    console.log("connect_timeout", timeout);
  });
  socket.on("reconnecting", attemptNumber => {
    console.log("reconnecting", attemptNumber);
  });
  socket.open();
  return socket;
}