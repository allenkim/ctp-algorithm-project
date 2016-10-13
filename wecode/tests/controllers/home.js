var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Home Controller', () => {
  it('should GET 200', (done) =>{
    chai.request(server)
      .get('/')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
