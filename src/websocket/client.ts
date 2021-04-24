import { io } from "../http";

io.on("connect", socket => {
  socket.on("client_first_access", params => {
    console.log(params);

    // Salvar a conexão com socket id e user id
  });
});
