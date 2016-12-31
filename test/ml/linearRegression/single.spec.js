let path = require('path');
let Poly = require(path.join(__dirname, '..', '../../src/ml/linearRegression/gradientDescent/poly'));

var assert = require('assert');
describe('GradientDescent',  () => {

	describe('converge', ()  =>{
	  
		let a = 23.289; let b = 11.788; let x = [];
		for(let i =0; i < 10; i++){
			x.push({x: i, y:a*i+b})
		}

		it( 'should return [' + a + ',' + b + '] when calling converge(xx  )'  ,  () => {
		assert.deepEqual([a,b],Poly.converge(x));
		});
	 
  }); 

});
