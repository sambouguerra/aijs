 
let { Matrix } = require("matjs") ;
class Multivariate{

    
    static theta(params,x) {  
        let t = new Matrix(params);
        let r = Matrix.dot(t, Matrix.T(new Matrix(x))); 
        return r.data[0][0];
       // console.log();
    }
    // static stepGradient(b_current, a_current, points, learningRate=0.001) {
    static stepGradient( current_params, points, learningRate=0.0001) {
        // let a_gradient = 0;
        // let b_gradient = 0;
        // let c_gradient = 0;
        // let d_gradient = 0;
        // let e_gradient = 0;
        let gradient_params = Array.from({length: current_params.length }, (v, k) => 0);
         
        // let len = points.length;
        let len = points.length; 
        
        // loop over the 15 examples
        // for (let i=0; i<len; i++) { 
        for (let i=0; i<len; i++) {   
            //let temp = Univariate.theta(a_current, b_current, points[i].x ) - points[i].y ;
            let temp = Multivariate.theta(current_params, points[i].x ) -points[i].y  ;
          
            // a_gradient += (2/len) * temp * points[i].x[0];
            // b_gradient += (2/len) * temp * points[i].x[1];
            // c_gradient += (2/len) * temp * points[i].x[2];
            // d_gradient += (2/len) * temp * points[i].x[3];
            // e_gradient += (2/len) * temp * points[i].x[4]; // points[i].x[4] == 1 
            for(let j in gradient_params){
                gradient_params[j] += (2/len) * temp * points[i].x[j];  
            }
            
        } 
        // let new_a = a_current - (learningRate * a_gradient)
        // let new_b = b_current - (learningRate * b_gradient)
        // let new_c = c_current - (learningRate * c_gradient)
        // let new_d = d_current - (learningRate * d_gradient)
        // let new_e = e_current - (learningRate * e_gradient)

        let new_params = [];
        for(let k in current_params ){
            let temp = current_params[k] - learningRate * gradient_params[k];
            new_params.push( temp )
        }

        return new_params;
    }

    static converge(points, maxIterations=100000000){
        // augment x with one at the end
        for(let k in points){
           points[k].x.push(1)
        }
        // var a ;
        // let b ;
        // let c ;
        // let d ;
        // let e ;
        let len = points[0].x.length;
        let params =  [];
        // let converged_a = Math.random();
        // let converged_b = Math.random();
        // let converged_c = Math.random();
        // let converged_d = Math.random();
        // let converged_e = Math.random();
        let converged_params = Array.from({length: len }, (v, k) => Math.random());
        // let count = 0;
        let count = 0;
        // do {
        //     count++;
        //     if(count > maxIterations)
        //         return console.log("Maximized the number of iterations without conversion")
        let done = true;
        do {
            count++;
            if(count > maxIterations)
                return console.log("Maximized the number of iterations without conversion")
        //  a = converged_a;
        //  b = converged_b;
        //  c = converged_c;
        //  d = converged_d;
        //  e = converged_e;
        params = [...converged_params]
        //  let converged = Univariate.stepGradient(b,a,points); 
        converged_params = Multivariate.stepGradient(params, points);

        //  converged_a = converged[0];
        //  converged_b = converged[1];
        //  converged_c = converged[2];
        //  converged_d = converged[3];
        //  converged_e = converged[4];
        done = true;
        for(let g in converged_params) {
            if (Math.abs(converged_params[g] - params[g] ) > 0.000001)
            {
                //  if(count % 10000 == 0)
                //     console.log("---- " + Math.abs(converged_params[g] - params[g] ))
                done = false;
            }
                
            // if(count % 10000 == 0)
            //     console.log(Math.abs(converged_params[g] - params[g] ))
        }
            
        }while(!done)
        // let roundedA = parseFloat(a.toFixed(6))
        // let roundedB = parseFloat(b.toFixed(6)) 
        for(let n in converged_params){
            converged_params[n] = parseFloat(converged_params[n].toFixed(6)) 
        }
        // console.log("RESULT")
        // console.log(converged_params)
        // return [roundedA,roundedB];
        return converged_params;

        // var a = Math.random();
        // let b = Math.random();
        // let converged_a = a;
        // let converged_b = b;
        // let count = 0;
        // do {
        //     count++;
        //     if(count > maxIterations)
        //         return console.log("Maximized the number of iterations without conversion")
            
        //     a = converged_a;
        //     b = converged_b;
        //     let converged = Univariate.stepGradient(b,a,points); 
        //     converged_a = converged[1];
        //     converged_b = converged[0];


        // }
        // while(Math.abs(a-converged_a) > 0.00000000000001 &&Math.abs( b-converged_b) > 0.00000000000001)
        // // console.log(" a %s b %s converged_a %s converged_b %s ", a, b, converged_a , converged_b)
        // let roundedA = parseFloat(a.toFixed(6))
        // let roundedB = parseFloat(b.toFixed(6)) 

        // return [roundedA,roundedB];
    }
}

module.exports =  Multivariate;