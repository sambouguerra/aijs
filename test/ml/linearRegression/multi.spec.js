let path = require('path'); 
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
// 			assert.deepEqual([e,d,c,b,a ],Multivariate.converge(xx));
// 		}); 
//   }); 
 
//   describe('converge Multivariate', ()  =>{
	  
// 		let a = 2.289; let b = 2.788; let c = 1.723; let d = 3.778; let e = 2.180;
// 		let x = Matrix.random(4, 20);
// 		let xx = [];
// 		// console.log(x);
// 		var y = (xi)=>{
// 			return e + d*xi[3] + c*xi[2] + b*xi[1] + a*xi[0]  ;
// 		}

// 		for(let i =0; i < x.rows; i++){
// 			let row = x.data[i];
// 			xx.push({x:row, y:y(row) })
// 		} 

// 		//console.log(xx)
// 		it( 'should return [' + a + ',' + b + '] when calling converge(xx  )'  ,  () => {
// 			assert.deepEqual([e,a,b,c,d],Multivariate.converge(xx));
// 		}); 
//   }); 
  describe('converge Multivariate', ()  =>{
 
		// let _a = 2.289; 
		// let _b = 11.788;  
		// let _c = 5.708; 
		// let _d = 8.235; 

		// let x = [];
		// for(let i =1; i < 20; i+=1){
		// 	let k1 = Math.random();
		// 	let k2 = Math.random();
		// 	let k3 = Math.random();
		// 	let y = _a*k1 +  _b*k2 + _c*k3 + _d;
		// 	x.push({x: [k1,k2,k3], y:y })
		// } 
		// it( 'should return the correct values when calling M.converge()'  ,  () => {
		// 	var t = Multivariate.converge(x);
		// 	let correctResult = true;
		// 	if( Math.abs(_a) - Math.abs(t[0]) > .02 ) correctResult = false;
		// 	if( Math.abs(_b) - Math.abs(t[1]) > .02 ) correctResult = false;
		// 	if( Math.abs(_c) - Math.abs(t[2]) > .02 ) correctResult = false;
		// 	if( Math.abs(_d) - Math.abs(t[3]) > .02 ) correctResult = false;
		

		// 	assert.equal(correctResult,true);
		// }); 
  }); 






