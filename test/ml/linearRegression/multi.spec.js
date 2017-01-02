let path = require('path');
let Univariate = require(path.join(__dirname, '..', '../../src/ml/linearRegression/gradientDescent/uni'));
let Multivariate = require(path.join(__dirname, '..', '../../src/ml/linearRegression/gradientDescent/multi'));

let { Matrix } = require("matjs") ;
 

var assert = require('assert');
 
//   describe('converge Multivariate', ()  =>{
	  
// 		let a = 2.289; let b = 2.788; let c = 1.723; let d = 3.778; let e = 2.180;
// 		let x = Matrix.random(4, 40);
// 		let xx = [];
// 		// console.log(x);
// 		var y = (xi)=>{
// 			return a * xi[0] + b * xi[1] + c * xi[2] + d * xi[3] + e;
// 		}

// 		for(let i =0; i < x.rows; i++){
// 			let row = x.data[i];
// 			xx.push({x:row, y:y(row) })
// 		} 

// 		//console.log(xx)
// 		it( 'should return [' + a + ',' + b + '] when calling converge(xx  )'  ,  () => {
// 			assert.deepEqual([a,b,c,d,e],Multivariate.converge(xx));
// 		}); 
//   }); 
 
//   describe('converge Multivariate', ()  =>{
	  
// 		let a = 2.289; let b = 2.788; let c = 1.723; let d = 3.778; let e = 2.180;
// 		let x = Matrix.random(1, 40);
// 		let xx = [];
// 		// console.log(x);
// 		var y = (xi)=>{
// 			return a * xi[0] + b  ;
// 		}

// 		for(let i =0; i < x.rows; i++){
// 			let row = x.data[i];
// 			xx.push({x:row, y:y(row) })
// 		} 

// 		//console.log(xx)
// 		it( 'should return [' + a + ',' + b + '] when calling converge(xx  )'  ,  () => {
// 			assert.deepEqual([a,b ],Multivariate.converge(xx));
// 		}); 
//   }); 
  describe('converge Multivariate', ()  =>{
	  
		let _a = 2.289; 
		let _b = 11.788; 
		let x = [];
		for(let i =1; i < 20; i+=1){
			let k =i;
			let y = _a*k+_b;
			x.push({x: [k], y:y })
		}
		//console.log(x)
		it( 'should return [' + _a + ',' + _b + '] when calling converge(xx  )'  ,  () => {
			assert.deepEqual([_a,_b],Multivariate.converge(x));
		}); 
  }); 






