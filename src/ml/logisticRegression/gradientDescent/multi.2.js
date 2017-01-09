
// const MIN_COST =  0.000001;  
// const LEARNING_RATE = 0.00001;

// let _pointsLength = 0;
// let _pointsLength_2 = 0;
// let _paramsLength = 0;

// class Multivariate{ 

     
//     static cost(params, points){
//         let totalError = 0;
//         for (let i=0; i<_pointsLength; i++) { 
//             totalError += Math.pow( (points[i].y - Multivariate.hypothesis(params, points[i].x) ) , 2 ) ;  
//             if(totalError > MIN_COST){ //there is no point of continuing the calculations
//                 return totalError;
//             }
//         } 
//         return totalError;
//     }

//     static sigmoid(x) {
//         return  1 / (1 + Math.exp(-x) )
//     }

//     static dot(params,x) { 
//         return params.reduce(function(r,a,i){return r+a*x[i]},0);
//     }

//     static hypothesis(params,x) { 
//         return Multivariate.sigmoid(Multivariate.dot(params,x));// params.reduce(function(r,a,i){return r+a*x[i]},0);
//     } 


//     static stepGradient( current_params, points, learningRate=LEARNING_RATE) {
        
//         let gradient_params = Array.from({length: _paramsLength }, (v, k) => 0);  
        
//         for (let i=0; i<_pointsLength; i++) {   
//             let point_i = points[i];
//             gradient_params = gradient_params.map(
//                 (v,j) => {
//                     return v + 
//                     (_pointsLength_2 * 
//                     (Multivariate.hypothesis(current_params,point_i.x ) -point_i.y) * 
//                     point_i.x[j])
//                 }
//             )
//         } 
        
//         if(isNaN(current_params[0]) ) 
//              throw "The numbers got huge and triggered an Error ...."  
        
//         return current_params.map( (v,k) => { return v - learningRate * gradient_params[k];  })
         
//     }

//     static converge(points, maxIterations=100000000){
         
//         // augment x with one at the end
//         for(let k in points){
//            points[k].x.push(1)
//         }
        
//         _pointsLength = points.length;
//         _pointsLength_2 = .5 *_pointsLength;
//         _paramsLength = points[0].x.length;
         
//         let params =  []; 
//         let converged_params = Array.from({length: _paramsLength }, (v, k) => Math.random()); 
//         let count = 0; 
//         let done = false;
//         do {
//             count++;
//             if(count > maxIterations)
//                 return console.log("Maximized the number of iterations without conversion") 

//             params =  [...converged_params];  
//             converged_params = Multivariate.stepGradient(params, points); 
           
//             let cost = Multivariate.cost(converged_params, points);
            
//             if (Math.abs(cost) < MIN_COST )  done = true;  // Exit  
//         }
//         while(!done) ;

//         for(let n in converged_params){
//             converged_params[n] = parseFloat(converged_params[n].toFixed(3)) 
//         }  
//         return converged_params;

//     }
// }

// module.exports =  Multivariate;