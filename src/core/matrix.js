
class Matrix {

  constructor(...inputs) {
		this._data = inputs;
		// inputs.forEach(i => this._data.push(i) );
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
		for (let j =0; j<rows; j++)
				tmp2.push(tmp);
		//console.log(tmp2)
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
		for (let j =0; j<rows; j++)
				tmp2.push(tmp);
		//console.log(tmp2)
		return new Matrix(...tmp2);
	}



    static add(m1, m2){
      let dim = m1.shape;

      let result = Matrix.zeros(dim[0], dim[1])
      for (let i =0; i<dim[0]; i++){
        for (let j = 0; j<dim[1]; j++){
          result.setItem(i,j,m1.getItem(i,j)+m2.getItem(i,j));
        }
      }
      return result;
    }
}
module.exports =  Matrix;
