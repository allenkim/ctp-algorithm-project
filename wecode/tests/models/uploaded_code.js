var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../../models');
var expect = chai.expect;

describe('uploaded_code Model', function() {
  before(function(done) {
    models.uploaded_code.sync({ force: true })
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should contain a uploaded_text property', function(done) {
    var u1 = models.uploaded_code.build();
    expect(u1).to.have.property('uploaded_text');
    done();
  });

  it('should not contain a user_id property', function(done) {
    var u1 = models.uploaded_code.build();
    expect(u1).to.not.have.property('user_id');
    done();
  });
});

describe('creating uploaded_code', function() {
  it('should not save when missing uploaded_text', function (done) {
    models.uploaded_code.create({
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should save when all properties are properly provided', function (done) {
    models.uploaded_code.create({
      uploaded_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
    .then(function() {
      done();
    })
    .catch(function (e) {
      done(e);
    })
  })

});
