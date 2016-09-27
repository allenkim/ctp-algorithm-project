var chai = require('chai');

var assert = chai.assert;

// normally implementation should not be in test code
// pretend that this function was imported
function factorial(n){
	var answer = 1;
	for (var i = 2; i <= n; ++i)
		answer *= i;
	return answer;
}

describe('Factorial Test', () => {
	it('should give 1 when given 0', () =>{
		assert.equal(factorial(0),1);
	});
	it('should give 1 when given 1', () =>{
		assert.equal(factorial(1),1);
	});
	it('should give 2 when given 2', () =>{
		assert.equal(factorial(2),2);
	});
	it('should give 6 when given 3', () =>{
		assert.equal(factorial(3),6);
	});
	it('should give 720 when given 6', () =>{
		assert.equal(factorial(6),720);
	});
});
