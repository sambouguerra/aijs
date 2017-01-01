let Univariate = require( './src/ml/linearRegression/gradientDescent/uni');
let Mulivariate = require( './src/ml/linearRegression/gradientDescent/multi');

exports.GradDescent =  {
    Uni: Univariate,
    Multi: Mulivariate
};