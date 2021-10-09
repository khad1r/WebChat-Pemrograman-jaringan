/**
 * Import module untuk server
 * express untuk server web nya
 * socket untuk websocket. module utama untuk komunikasi realtime di web ini
 */
let express = require("express");
let socket = require("socket.io");

/**
 * express menghosting folder www yang berisi file webnya ke localhost port 3000
 */
let app = express();
let server = app.listen(3000, function () {
  console.log("listening to http://localhost:3000/");
});
app.use(express.static("www"));

//membuat server socket pada localhost
let io = socket(server);

//fungsi fungsi untuk socket
io.on("connection", function (socket) {
  // ketika ada sambungan client maka console log :
  console.log("koneksi socket baru :", socket.id);

  socket.on("chat", function (data) {
    //ketika client melakukan chat akan di console log:
    console.log(
      "sebuah chat dikirim dari :",
      socket.id,
      " dengan isi : ",
      data
    );
    //data dari client akan di broadcast ke semua client yang terhubung dengan server
    io.sockets.emit("chat2", data);
  });
});
