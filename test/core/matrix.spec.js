let  path = require('path');
let Matrix = require(path.join(__dirname, '..', '../src/core/matrix'));

var assert = require('assert');
describe('Matrix',  () => {

	describe('zeros', ()  =>{
		var k = Matrix.zeros(3);
    it('should return [[0,0,0]] when the value is not present',  () => {
      assert.deepEqual([[0,0,0]],k.data);
    });
		var a = Matrix.zeros(3,2);
		it('should return [[0,0,0], [0,0,0]] when the value is not present',  () => {
			assert.deepEqual([[0,0,0], [0,0,0]] ,a.data);
		});
  });

	describe('ones', ()  =>{
		var k = Matrix.ones(3);
    it('should return [[1,1,1]] when runnin Matrix.ones(3)',  () => {
      assert.deepEqual([[1,1,1]],k.data);
    });
		var a = Matrix.ones(3,2);
		it('should return [[1,1,1], [1,1,1]] when running Matrix.ones(3,2)',  () => {
			assert.deepEqual([[1,1,1], [1,1,1]] ,a.data);
		});
  });

	describe('dim', ()  =>{
		var k = new Matrix([1,3,4,1,3]);
		it('should return 1 when running new Matrix([1,3,4,1,3]).ndim',  () => {
			assert.equal(1,k.ndim);
		});
		var a = new Matrix([1,3],[4,1]);
		it('should return 2 when when running new Matrix([1,3],[4,1]).ndim',  () => {
			assert.equal(2,a.ndim);
		});
	});

	describe('shape', ()  =>{
		var k = new Matrix([1,3,4,1,3]);
		it('should return [3,1] when running new Matrix([1,3,4,1,3]).shape',  () => {
			assert.deepEqual([5,1],k.shape);
		});
		var a = new Matrix([1,2,3],[4,2,1]);
		it('should return [3,2] when when running new Matrix([1,2,3],[4,2,1]).shape',  () => {
			assert.deepEqual([3,2],a.shape);
		});
	});

	describe('getItem', ()  =>{
		var k = new Matrix([1,3,4,1,3]);
		it('should return 1 when running new Matrix([1,3,4,1,3]).getItem(0)',  () => {
			assert.equal(1,k.getItem(0));
		});
		var a = new Matrix([1,2,3],[4,2,1]);
			it('should return 1 when running new Matrix([1,2,3],[4,2,1]).getItem(1,1)',  () => {
			assert.equal(2,a.getItem(1,1));
			assert.equal(4,a.getItem(0,1));
		});
	});

	describe('setItem', ()  =>{
		var k = new Matrix([1,3,4,1,3]);
		it('should return 999 when running new Matrix([1,3,4,1,3]).setItem(0,0,999)',  () => {
			assert.equal(999,k.setItem(0,0,999));
		});
		var a = new Matrix([1,2,3],[4,2,1]);
			it('should return 999 when running new Matrix([1,2,3],[4,2,1]).setItem(1,1,999)',  () => {
			assert.equal(999,a.setItem(1,1,999));
			assert.equal(999,a.setItem(0,1,999));
			assert.deepEqual([[1,2,3],[999,999,1]],a.data);
		});
	});

		describe('add', ()  =>{
			var a = new Matrix([1,3,4,1,3]);
			var b = new Matrix([1,3,4,0,0]);
			it('should return [[2,6,8,1,3]] when running Matrix.add(new Matrix([1,3,4,1,3]),new Matrix([1,3,4,0,0])).data ',  () => {
				assert.deepEqual([[2,6,8,1,3]],Matrix.add(a,b).data);
			});
		});

 		describe('dot', ()  =>{
			var a = new Matrix([1, 2,1], [3, 4,1]);
			var b = new Matrix([1, 0], [0, 1], [1,1]);
			it('should return [[ 2,  3], [4, 5]] when running Matrix.dot(new Matrix([1, 2,1], [3, 4,1]),new Matrix([1, 0], [0, 1], [1,1])).data ',  () => {
				assert.deepEqual([[ 2,  3], [4, 5]],Matrix.dot(a,b).data);
			});
		});

		describe('transpose', ()  =>{
			var a = new Matrix([1, 2,1], [3, 4,1]);
			var b = new Matrix([1, 3], [2, 4], [1,1]);
			it('should return [[1, 3], [2, 4], [1,1]] when running Matrix.T(new Matrix([1, 2,1], [3, 4,1]) ).data ',  () => {
				assert.deepEqual(b.data,Matrix.T(a).data);
			});
		});
	 


});
