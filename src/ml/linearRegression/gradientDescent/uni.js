 class Univariate{
     
    static theta(a,b,x) {
        return (a*x) + b;   
    }
    static stepGradient(b_current, a_current, points, learningRate=0.001) {
        let b_gradient = 0;
        let a_gradient = 0;
        let len = points.length;
        
        for (let i=0; i<len; i++) {  
            let temp = Univariate.theta(a_current, b_current, points[i].x ) - points[i].y ;
            b_gradient += (2/len) * temp;
            a_gradient += (2/len) * temp *points[i].x;
        } 
        let new_b = b_current - (learningRate * b_gradient)
        let new_a = a_current - (learningRate * a_gradient)
        return [new_b, new_a]
    }

    static converge(points, maxIterations=1000000){
        let a; let b;
        let converged_a = Math.random();
        let converged_b = Math.random();
        let count = 0;
        do {
            count++;
            if(count > maxIterations)
                return console.log("Maximized the number of iterations without conversion")
            
            a = converged_a;
            b = converged_b;
            let converged = Univariate.stepGradient(b,a,points); 
            converged_a = converged[1];
            converged_b = converged[0];


        }
        while(Math.abs(a-converged_a) > 0.00000000000001 &&Math.abs( b-converged_b) > 0.00000000000001)
        // console.log(" a %s b %s converged_a %s converged_b %s ", a, b, converged_a , converged_b)
        let roundedA = parseFloat(a.toFixed(6))
        let roundedB = parseFloat(b.toFixed(6)) 

        return [roundedA,roundedB];
    }
}

module.exports =  Univariate;