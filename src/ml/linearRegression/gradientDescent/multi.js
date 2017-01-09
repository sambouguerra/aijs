
const MIN_COST =  0.0000001;  
const LEARNING_RATE = 0.01;
const MAX_ITERATIONS = 1000000000;

let m; // The number of examples
let n; // The number of features

let X = []; // The inputs
let Y = []; // The output

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

    static hypothesis(theta, x){
        return M.dot(theta, x);
    }

    static sum(thetas, j_index){
        let result = 0;
        //loop over the m examples
        for(let i=0; i<m; i++){
            let xi = X[i];
            result += ( M.hypothesis(thetas, xi) - Y[i] )* xi[j_index]
        }
        return result;
    }
    static converge(data, maxIterations=MAX_ITERATIONS){
       console.time("dbsave");
        // augment x with one at the end
        for(let k in data){
           X[k] = [ ...data[k].x , 1];
           Y[k] = data[k].y; 
        }   
        m = X.length;       //number of examples
        n = X[0].length;    //number of features

        //initialize thetas with random variables
        let thetas = Array.from({length: n }, (v, k) => Math.random()); 
        let newThetas =  [...thetas];
        let count = 0; 
        let done = false;
        const LEARNING_RATE_M = LEARNING_RATE/m;

        let costCycleJumps = 1000;
        do {
            count++;
            if(count > maxIterations)
                return console.log("Maximized the number of iterations without conversion");

            for (let j=0; j<n; j++){
               newThetas[j] =  newThetas[j] - LEARNING_RATE_M * M.sum(thetas, j); 
            }
            // for(let i =0; i<n;i++){
            //     thetas[i] = newThetas[i]
            // }
            thetas =  [...newThetas];
            let cost = M.cost(newThetas, X);
          
            let diff = Math.abs(Math.abs(cost) - MIN_COST);
            if (diff < MIN_COST )  done = true;  // Exit  

            if(costCycleJumps < 0){
                // console.log(cost) 
                if (diff < MIN_COST )  done = true;  // Exit  
                if(diff > .01) costCycleJumps = 100000;
                else if(diff > .001) costCycleJumps = 10000;
                else if(diff > .0001) costCycleJumps = 1000;

            }
            costCycleJumps--;
            
            
        }
        while(!done) ;
        console.timeEnd("dbsave"); console.time("dbsave");
         for(let n in thetas){
            thetas[n] = parseFloat(thetas[n].toFixed(3)) 
        }  
         console.timeEnd("dbsave"); console.time("dbsave");
        return thetas; 
    }
}

module.exports =  M;