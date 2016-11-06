var socket = io();

// clearText is the variable to know when to remove the "user is typing" message
var clearText;

$('#chat_form').submit(function(){
  var text = $('#chatbox_input').val();
  socket.emit('chat message', text);
  $('#messages').append('<div class="user_messages"><span class="chat_username">' + socket.id + ': </span><p class="message_text">' + text + '</p></div>');
  $('#chatbox_input').val('');
  return false;
});

$('#chatbox_input').keypress(function(){
  socket.emit('user is typing');
});

socket.on('chat message',function(msg){
  $('#user_typing').text("");
  $('#messages').append('<div class="other_user_messages"><span class="chat_username">' + msg.id + ':</span><p class="message_text">' + msg.text + '</p></div>');
});

socket.on('user is typing',function(id){
  clearTimeout(clearText);
  $('#user_typing').text(id + " is typing...");
  $('#user_typing').removeClass('hidden');
  clearText = setTimeout(function(){
    $('#user_typing').addClass('hidden');
  }, 3000);
});

$("#problem_input").click(function() {
  var input = "Hello World!";
  var file = new File([input], "helloworld.txt", {type: "text/plain;charset=utf-8"});
  saveAs(file);
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
