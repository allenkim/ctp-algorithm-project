var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../../models');
var expect = chai.expect;

describe('question_attempts Model', function() {
  before(function(done) {
    models.question_attempts.sync({ force: true })
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should contain a question_id property', function(done) {
    var u1 = models.question_attempts.build();
    expect(u1).to.have.property('question_id');
    done();
  });

  it('should contain a user_id property', function(done) {
    var u1 = models.question_attempts.build();
    expect(u1).to.have.property('user_id');
    done();
  });

  it('should contain a code_id property', function(done) {
    var u1 = models.question_attempts.build();
    expect(u1).to.have.property('code_id');
    done();
  });

  it('should contain a success property', function(done) {
    var u1 = models.question_attempts.build();
    expect(u1).to.have.property('success');
    done();
  });

  it('should contain a upload_time property', function(done) {
    var u1 = models.question_attempts.build();
    expect(u1).to.have.property('upload_time');
    done();
  });
});

describe('creating question_attempts', function() {
  it('should not save when missing question_id', function (done) {
    models.question_attempts.create({
      user_id: '42',
      code_id: '231',
      success: true,
      upload_time: "3/31/2015"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing user_id', function (done) {
    models.question_attempts.create({
      question_id: '4',
      code_id: '231',
      success: true,
      upload_time: "3/31/2015"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing code_id', function (done) {
    models.question_attempts.create({
      question_id: '4',
      user_id: '42',
      success: true,
      upload_time: "3/31/2015"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing success', function (done) {
    models.question_attempts.create({
      question_id: '4',
      user_id: '42',
      code_id: '231',
      upload_time: "3/31/2015"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing upload_time', function (done) {
    models.question_attempts.create({
      question_id: '4',
      user_id: '42',
      code_id: '231',
      success: true,
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should save when all properties are properly provided', function (done) {
    models.question_attempts.create({
      question_id: '4',
      user_id: '42',
      code_id: '231',
      success: true,
      upload_time: "3/31/2015"
    })
    .then(function() {
      done();
    })
    .catch(function (e) {
      done(e);
    })
  })

});
