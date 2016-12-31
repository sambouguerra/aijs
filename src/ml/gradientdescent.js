class GradientDescent {


    constructor(){

    }

    // # y = mx + b
    // # m is slope, b is y-intercept

    computeErrorForLineGivenPoints(b,m,points){
        let totalError = 0
        let len = points.length;
        for (let i =0; i< len ; i++)
            totalError += Math.pow((points[i].y -  (m * points[i].x + b)) ,2 );
        return totalError / len
    }

    stepGradient(b_current, m_current, points, learningRate){
        let b_gradient = 0;
        let m_gradient = 0;
        let N = points.length;

    }

    // def stepGradient(b_current, m_current, points, learningRate):
    // b_gradient = 0
    // m_gradient = 0
    // N = float(len(points))
    // for i in range(0, len(points)):
    //     b_gradient += -(2/N) * (points[i].y - ((m_current*points[i].x) + b_current))
    //     m_gradient += -(2/N) * points[i].x * (points[i].y - ((m_current * points[i].x) + b_current))
    // new_b = b_current - (learningRate * b_gradient)
    // new_m = m_current - (learningRate * m_gradient)
    // return [new_b, new_m]


}