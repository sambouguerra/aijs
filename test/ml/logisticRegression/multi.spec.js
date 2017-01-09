let path = require('path');
let Multivariate = require(path.join(__dirname, '..', '../../src/ml/logisticRegression/gradientDescent/multi'));
let _trainData = require(path.join(__dirname, '..', '../../data/logisticRegression/train.js'));
let _testData = require(path.join(__dirname, '..', '../../data/logisticRegression/test.js'));


var assert = require('assert');
 
  describe('converge Multivariate', ()  =>{
	   

	  let trainData = _trainData.map(v => {
		  	let tmp = v.split(','); 
			return { 
				x : [ tmp[0], tmp[1]],
				y : tmp[2]
			}
		})
		let testData = _testData.map(v => {
		  	let tmp = v.split(','); 
			return { 
				x : [ tmp[0], tmp[1], 1],
				y : tmp[2]
			}
		})

		// function sigmoid(x) {
        // 	return  1 / (1 + Math.exp(-x) )
    	// } 

		// function hypothesis(params,x) { 
		// 	return M.sigmoid(M.dot(params,x));// params.reduce(function(r,a,i){return r+a*x[i]},0);
		// } 
		var result = Multivariate.converge(trainData);
		console.log(result);
		function theta(params,x) {  
        	let thetaX = params.reduce(function(r,a,i){return r+a*x[i]},0);
        	return ( 1 / (1 + Math.exp(-thetaX)) );
    	}
		for(t in testData) {
			var testElement = testData[t];
			console.log(testElement.y + " " + theta(result,testElement.x ))
		} 
  }); 






