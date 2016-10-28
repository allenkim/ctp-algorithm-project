var chai = require('chai');
var chaiHttp = require('chai-http');
var models = require('../../models');
var expect = chai.expect;

describe('questions Model', function() {
  before(function(done) {
    models.questions.sync({ force: true })
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });

  it('should contain a question_title property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('question_title');
    done();
  });

  it('should contain a input property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('input');
    done();
  });

  it('should contain a output property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('output');
    done();
  });

  it('should contain a number_attempts property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('number_attempts');
    done();
  });

  it('should contain a number_success property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('number_success');
    done();
  });

  it('should contain a date property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.have.property('date');
    done();
  });

  it('should not contain a user_id property', function(done) {
    var u1 = models.questions.build();
    expect(u1).to.not.have.property('user_id');
    done();
  });
});

describe('creating questions', function() {
  it('should not save when missing question_title', function (done) {
    models.questions.create({
      input: '2 3 1 23 1',
      output: '1 2 3 4 5',
      number_attempts: 231,
      number_success: 1,
      date: "2/2/2004"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing input', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      output: '1 2 3 4 5',
      number_attempts: 231,
      number_success: 1,
      date: "2/2/2004"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing output', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      input: '2 3 1 23 1',
      number_attempts: 231,
      number_success: 1,
      date: "2/2/2004"
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });

  it('should not save when missing date', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      input: '2 3 1 23 1',
      output: '1 2 3 4 5',
      number_attempts: 231,
      number_success: 1,
    })
    .then(function () {
      done('failed');
    })
    .catch(function (e) {
      done();
    });
  });


  it('should save when missing number_attempts', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      input: '2 3 1 23 1',
      output: '1 2 3 4 5',
      number_success: 1,
      date: "2/2/2004"
    })
    .then(function() {
      done();
    })
    .catch(function (e) {
      done(e);
    })
  })

  it('should save when missing number_success', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      input: '2 3 1 23 1',
      output: '1 2 3 4 5',
      number_attempts: 231,
      date: "2/2/2004"
    })
    .then(function() {
      done();
    })
    .catch(function (e) {
      done(e);
    })
  })

  it('should save when all properties are properly provided', function (done) {
    models.questions.create({
      question_title: "Allen's Question",
      input: '2 3 1 23 1',
      output: '1 2 3 4 5',
      number_attempts: 231,
      number_success: 1,
      date: "2/2/2004"
    })
    .then(function() {
      done();
    })
    .catch(function (e) {
      done(e);
    })
  })

});
