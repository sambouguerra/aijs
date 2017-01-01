 
let { Matrix } = require("matjs") ;
let _pointsLength = 0;
let _pointsLength_2 = 0;
let _paramsLength = 0;
class Multivariate{
    
    static theta(params,x) {  
        return params.reduce(function(r,a,i){return r+a*x[i]},0);
    }
    // static stepGradient(b_current, a_current, points, learningRate=0.001) {
    static stepGradient( current_params, points, learningRate=0.0001) {
        
        let gradient_params = Array.from({length: _paramsLength }, (v, k) => 0);  
        
        for (let i=0; i<_pointsLength; i++) {   
            let point_i = points[i];
            gradient_params = gradient_params.map(
                (v,j) => {
                    return v + 
                    (_pointsLength_2 * 
                    (Multivariate.theta(current_params,point_i.x ) -point_i.y) * 
                    point_i.x[j])
                }
            )
        } 
        return current_params.map( (v,k) => { return v - learningRate * gradient_params[k];  })
         
    }

    static converge(points, maxIterations=100000000){
         
        // augment x with one at the end
        for(let k in points){
           points[k].x.push(1)
        }
        
        _pointsLength = points.length;
        _pointsLength_2 = .5 *_pointsLength;
        _paramsLength = points[0].x.length;
         
        let params =  []; 
        let converged_params = Array.from({length: _paramsLength }, (v, k) => Math.random()); 
        let count = 0; 
        let done = true;
        do {
            count++;
            if(count > maxIterations)
                return console.log("Maximized the number of iterations without conversion") 
            params =  [...converged_params]; 
            converged_params = Multivariate.stepGradient(params, points);

            done = true;
            var l = _paramsLength;
            while(done && l>=0){
                if (Math.abs(converged_params[l] - params[l] ) > 0.0000001) 
                    done = false;  
                l--;
            } 
            
        }
        while(!done) ;

        for(let n in converged_params){
            converged_params[n] = parseFloat(converged_params[n].toFixed(3)) 
        }  
        return converged_params;

    }
}

module.exports =  Multivariate;