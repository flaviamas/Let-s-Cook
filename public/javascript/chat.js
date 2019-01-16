$(function() {
  //make connection
  var socket = io();

  //buttons and inputs
  var message = $("#message");
  var username = $("#username");
  var send_message = $("#send_message");
  var send_username = $("#send_username");
  var chatroom = $("#chatroom");

  //Emit message
  send_message.click(function() {
    socket.emit("new_message", { message: message.val() });
    message.val("");
  });

  //Listen on new_message
  socket.on("new_message", data => {
    console.log(data);
    chatroom.append(
      "<p class='message'>" + data.username + ": " + data.message + "</p>"
    );
  });
  //Emit a surname
  send_username.click(function() {
    console.log(username.val());
    socket.emit("change_username", { username: username.val() });
  });

});
