var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('User Controller', () => {
  it('should GET 200 for list of users', (done) =>{
    chai.request(server)
      .get('/user')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should GET 200 for a particular user', (done) =>{
    chai.request(server)
      .get('/user/random_user')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
