
class Matrix {

	constructor(...inputs) {
			this._data = inputs;
	}
	
	get data () {
		return this._data;
	}

	/**
	 * ndim
	 * the number of axes (dimensions) of the Matrix
	 */
	get ndim() {
		return this._data.length;
	}

	/**
	 * shape
	 * the dimensions of the matrix. This is an array of integers indicating the size of the array in each dimension.
	 * For a matrix with n rows and m columns, shape will be [m,n].
	 * ?? The length of the shape array is therefore the rank, or number of dimensions, ndim.
	 */
	get shape() {
		this._shape = [this._data[0].length, this._data.length];
		return this._shape;
	}
	get cols(){
		return this.shape[0];
	}
	get rows(){
		return this.shape[1];
	}
	getItem(col,row = 0){
		return this._data[row][col];
	}
				
	setItem(col,row, value){
		this._data[row][col] = value;
		return this._data[row][col];
	}
	/**
	 * zeros
	 * Static method
	 * Return return a new Matrix of given length, filled with zeros.
	 * params: cols, rows ( optional )
	 */
	static zeros(cols, rows = 1){

		let tmp = [];
		for (let i =0; i<cols; i++)
				tmp.push(0);
		if(rows == 1)
			return new Matrix(tmp);

		let tmp2 = [];
		for (let j =0; j<rows; j++){
				tmp = [];
				for (let i =0; i<cols; i++)
					tmp.push(0);
				tmp2.push(tmp);
		}
			

		return new Matrix(...tmp2);
	}

	/**
	 * ones
	 * Static method
	 * Return return a new Matrix of given length, filled with ones.
	 * params: cols, rows ( optional )
	 */
	static ones(cols, rows = 1){

		let tmp = [];
		for (let i =0; i<cols; i++)
				tmp.push(1);
		if(rows == 1)
			return new Matrix(tmp);

		let tmp2 = [];
		for (let j =0; j<rows; j++){
				tmp = [];
				for (let i =0; i<cols; i++)
					tmp.push(1);
				tmp2.push(tmp);
		}

		return new Matrix(...tmp2);
	}
	/**
	 * add
	 * Static method
	 * Return return a new Matrix which is the sum of the 2 matrices.
	 * params: matrix, matrix
	 */
    static add(m1, m2){
      let dim = m1.shape;
			if(m1.shape[0] != m2.shape[0] || m1.shape[1] != m2.shape[1])
				throw ("The provided Matrices have different dimensions")
			//check if the 2 matrices have the same dimensions

      let result = Matrix.zeros(dim[0], dim[1])
      for (let i =0; i<dim[0]; i++){
        for (let j = 0; j<dim[1]; j++){
          result.setItem(i,j,m1.getItem(i,j)+m2.getItem(i,j));
        }
      }
      return result;
    }
	/**
	 * T 
	 * Static method
	 * Return the transpose matrix 
	 * params: matrix
	 */
	static T(matrix) { 
		let result = Matrix.zeros(matrix.rows, matrix.cols);
		for (let i in matrix.data)
			for (let j in matrix.data[i])
				result.setItem(i,j,matrix.getItem(j,i));
		return result;
	}

	/**
	 * dot
	 * Static method
	 * Return  a new Matrix which is the dot product of the 2 matrices.
	 * params: matrix, matrix
	 */
		static dot(m1,m2) {

			let m = m1.shape[0]; //  
			let n = m1.shape[1]; // 
			let p = m2.shape[0]; //
			if(m1.cols != m2.rows)
				throw 'The sizes of matrices are not compatible'
			let result = Matrix.zeros(n, p); 

			for(let i = 0; i<n; i++){
				for(let j=0; j<p; j++){
					let sum = 0; 
					for(let k=0; k<m; k++){//3	for() 
					 	sum += m1.getItem(k,i)*m2.getItem(j,k)
					}
					result.setItem(j,i, sum);
				}
			}
			return result;
		}
 
}
module.exports =  Matrix;
