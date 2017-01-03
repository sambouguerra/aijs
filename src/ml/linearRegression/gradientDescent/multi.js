
const MIN_COST =  0.0000001;  
const LEARNING_RATE = 0.001;
const MAX_ITERATIONS = 1000000000;

let m; // The number of examples
let n; // The number of features

let X = [];
let Y = [];
//M for Multivariate
class M{ 

    static cost(params){
        let totalError = 0;
        for (let i=0; i<m; i++) { 
            let er =  (Y[i] - M.dot(params, X[i]) );
            
            totalError +=  er * er ;
            if(totalError > MIN_COST)
                return totalError;  
        } 
        return totalError;
    }
    static dot(params,x) {
        let result = 0;
        for (let i=0; i<n; i++) { 
            result += params[i]*x[i]
        }
        return result;
    } 

    static h(theta, x){
        return M.dot(theta, x);
    }

    static sum(thetas, j_index){
        let result = 0;
        //loop over the m examples
        for(let i=0; i<m; i++){
            result += ( M.h(thetas, X[i]) - Y[i] )* X[i][j_index]
        }
        return result;
    }
    static converge(data, maxIterations=MAX_ITERATIONS){
       
        // augment x with one at the end
        for(let k in data){
           X[k] = [1, ...data[k].x];
           Y[k] = data[k].y; 
        }   
        m = X.length;       //number of examples
        n = X[0].length;    //number of features

        //initialize thetas with random variables
        let thetas = Array.from({length: n }, (v, k) => Math.random()); 
        let newThetas =  [...thetas];
        let count = 0; 
        let done = false;
        let LEARNING_RATE_M = LEARNING_RATE/m;
        do {
            count++;
            if(count > maxIterations)
                return console.log("Maximized the number of iterations without conversion");

            for (let j=0; j<n; j++){
               newThetas[j] =  newThetas[j] - LEARNING_RATE_M * M.sum(thetas, j); 
            }
            thetas =  [...newThetas];
            let cost = M.cost(newThetas, X);
            if(count % 100 == 0){
               // console.log(cost) ;console.log(newThetas)  
            }
               
            if (Math.abs(cost) < MIN_COST )  done = true;  // Exit  
        }
        while(!done) ;

         for(let n in thetas){
            thetas[n] = parseFloat(thetas[n].toFixed(3)) 
        }  
        return thetas; 
    }
}

module.exports =  M;