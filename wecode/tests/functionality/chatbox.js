var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

var io = require('socket.io-client');

var socketUrl = 'http://localhost:8000';
var options ={
  transports: ['websocket'],
  'force new connection': true
};

describe("Chat Server",function(){
  it('Should be able to receive message with 2 clients', function(done){
      var client1, client2;
      var message = 'Hello World!';
      client1 = io.connect(socketUrl, options);

      client1.on('chat message', function(msg){
        expect(msg.text).to.equal(message);

        client1.disconnect();
        client2.disconnect();
        done();
      });

      client1.on('connect', function(){
        client2 = io.connect(socketUrl, options);

        client2.on('connect', function(){
          client2.emit('chat message', message);
        });

      });
  });

  it('Should be able to broadcast messages with 2 clients', function(done){
      var client1, client2;
      var message1 = 'Hello World!';
      var message2 = "Yo";
      var messageCount = 0;
      client1 = io.connect(socketUrl, options);
      client2 = io.connect(socketUrl, options);

      client1.on('chat message', function(msg){
        expect(msg.text).to.equal(message1);
        messageCount++;
        if(messageCount === 2){
          client1.disconnect();
          client2.disconnect();
          done();
        };
      });

      client2.on('chat message', function(msg) {
        expect(msg.text).to.equal(message2);
        messageCount++;
        if(messageCount === 2){
          client1.disconnect();
          client2.disconnect();
          done();
        };
      });

      client1.on('connect', function(){
        client1.emit('chat message', message2);

        client2.on('connect', function(){
          client2.emit('chat message', message1);
        });
      });
  });

  it('Should be able to broadcast messages with 3 clients', function(done){
    var client1, client2, client3;
    var message = 'Hello World!';
    var messageCount = 0;
    client1 = io.connect(socketUrl, options);
    client2 = io.connect(socketUrl, options);
    client3 = io.connect(socketUrl, options);

    client1.on('chat message', function(msg){
      expect(msg.text).to.equal(message);
      messageCount++;
      if(messageCount === 3){
        client1.disconnect();
        client2.disconnect();
        client3.disconnect();
        done();
      };
    });

    client2.on('chat message', function(msg) {
      expect(msg.text).to.equal(message);
      messageCount++;
      if(messageCount === 3){
        client1.disconnect();
        client2.disconnect();
        client3.disconnect();
        done();
      };
    });

    client3.on('chat message', function(msg) {
      expect(msg.text).to.equal(message);
      messageCount++;
      if(messageCount === 3){
        client1.disconnect();
        client2.disconnect();
        client3.disconnect();
        done();
      };
    });

    client1.on('connect', function(){
      client1.emit('chat message', message);

      client2.on('connect', function(){
        client2.emit('chat message', message);

        client3.on('connect', function(){
          client3.emit('chat message', message);
        });
      });
    });
  });

  // Needs work once we get username up and running
  it('Should be able to broadcast user_typing to 2 clients', function(done){
    var client1, client2;
    client1 = io.connect(socketUrl, options);

    client1.on('user is typing', function(){
      done();
    })

    client1.on('connect', function(){
      client2 = io.connect(socketUrl, options);

      client2.on('connect', function(){
        client2.emit('user is typing');
      });
    });
  });

});
