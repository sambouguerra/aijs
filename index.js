let  path = require('path');
let Matrix = require(path.join(__dirname, '.', './src/core/matrix'));
let Poly = require(path.join(__dirname, '.', './src/ml/linearRegression/gradientDescent/poly'));
 
exports.Matrix = Matrix;
exports.GradDescent = Poly;