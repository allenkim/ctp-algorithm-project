var socket = io();

// clearText is the variable to know when to remove the "user is typing" message
var clearText;



$('#chat_form').submit(function(){
  var text = $('#chatbox_input').val();
  socket.emit('chat message', text);
  $('#chatbox_input').val('');
  return false;
});

$('#chatbox_input').keypress(function(){
  socket.emit('user is typing');
});

socket.on('chat message',function(msg, username){
  $('#user_typing').text("");
  $('#messages').append('<div class="other_user_messages"><span class="chat_username">' + username + ':</span><p class="message_text">' + msg + '</p></div>');
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
  var input = `14
-927101048 -927101048
-618970250 648940120
-804722077 -964548842
-366618439 -188307001
380565241 165732307
918809675 -215309091
842843672 -953850991
363785686 728361547
31682488 31682488
288101856 868511451
-325935686 -595215593
-382147959 231270880
-2 -2
-879489962 -88890426
`;
  var file = new File([input], "input.in", {type: "text/plain;charset=utf-8"});
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
