// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


let rotate = (matrix) => {
    let n = matrix.length;
        
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j<n/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }

    return matrix;
}

console.log("Input: [[1,2,3],[4,5,6],[7,8,9]], expected: [[7,4,1],[8,5,2],[9,6,3]], actual: ",rotate([[1,2,3],[4,5,6],[7,8,9]]));
console.log("Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]], actual: ",rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
