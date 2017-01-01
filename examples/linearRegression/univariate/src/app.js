require('babel-polyfill') ; 
var $ = require('jquery'); 
var Highcharts = require('highcharts');
var aijs =  require('aijs') ;  

let _a = 2.289; 
let _b = 11.788; 
let x = [];
 
for(let i =0; i < 50; i+=1){
    x.push({x: i, y:_a*i+_b + Math.random()* 50})
}
 
$( document ).ready(function() {
    
    var result = aijs.GradDescent.Univariate.converge(x); 
    
    let x1 = x[0].x;
    let y1 = result[0]*x1 + result[1]; 
    let x2 = x[x.length-1].x;
    let y2 = result[0]*x2 + result[1];
 
    Highcharts.chart('linearregression1', {
        xAxis: { min: 0, max: 50 },
        yAxis: { min: 0 },
        title: {
            text: 'Linear Regression ( Polynomial )'
        },
        series: [{
            type: 'line',
            name: 'Regression Line',
            data: [[x1, y1], [x2, y2]],
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Points',
            data: x.map(x =>  x.y ),
            marker: {
                radius: 4
            }
        }]
    });

})
 