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
  it('Should be able to broadcast messages with 2 clients', function(done){
      var client1, client2;
      var message = 'Hello World!'
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

  it('Should be able to broadcast messages with 3 clients', function(done){
      var client1, client2, client3;
      var message = 'Hello World!'
      client1 = io.connect(socketUrl, options);

      client1.on('chat message', function(msg){
        expect(msg.text).to.equal(message);

        client1.disconnect();
        client2.disconnect();
        client3.disconnect();
        done();
      });

      client1.on('connect', function(){
        client2 = io.connect(socketUrl, options);

        client2.on('connect', function(){
          client3 = io.connect(socketUrl, options);

          client3.on('connect', function(){
            client3.emit('chat message', message);
          });
        });

      });
  });
});
