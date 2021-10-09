//mengkoneksikan ke server socket di server
let socket = io.connect();

let sender = prompt("Nama Kamu:", "Chatter");
document.getElementById("nama").innerText = sender;

let message = document.getElementById("message");
let btn = document.getElementById("send");

let output = document.getElementById("output");

btn.addEventListener("click", function () {
  if (message.value != "") {
    // mengirim pesan ke server
    socket.emit("chat", {
      sender: sender,
      message: message.value,
    });
  }
  message.value = "";
});
// ketika menerima pesan dari server maka menapilkan pesan
socket.on("chat2", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.sender + ": </strong>" + data.message + "</p>";
});
