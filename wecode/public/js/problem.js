var socket = io();

// clearText is the variable to know when to remove the "user is typing" message
var clearText;

$('form').submit(function(){
  var text = $('#chatbox_input').val();
  socket.emit('chat message', text);
  $('#messages').append('<li>' + socket.id + ": " + text + '</li>');
  $('#chatbox_input').val('');
  return false;
});

$('#chatbox_input').keypress(function(){
  socket.emit('user is typing');
});

socket.on('chat message',function(msg){
  $('#user_typing').text("");
  $('#messages').append('<li>' + msg.id + ": " + msg.text + '</li>');
});

socket.on('user is typing',function(id){
  clearTimeout(clearText);
  $('#user_typing').text(id + " is typing...");
  clearText = setTimeout(function(){
    $('#user_typing').text("");
  }, 3000);
});

$("#problem_output").change(function() {
  var file = this.files[0];
  var textType = /text.*/;
  if (file.type.match(textType)) {
    var reader = new FileReader();

    reader.onload = function(e) {
      console.log(reader.result);
      console.log(typeof reader.result);
    }

    reader.readAsText(file);
  }
  else {
    console.log("File not supported!");
  }
});

$("#source_code").change(function() {
  var file = this.files[0];
  var textType = /text.*/;
  if (file.type.match(textType)) {
    var reader = new FileReader();

    reader.onload = function(e) {
      console.log(reader.result);
      console.log(typeof reader.result);
    }

    reader.readAsText(file);
  }
  else {
    console.log("File not supported!");
  }
});
