// The function accepts two arrays, the function should return true if every value in the array has its corresponding value squared in the second array
// The frequency of values must be the same.
// same([1,2,3],[4,1,9]) true
// same([1,2,3],[1,9]) false

function same(array1, array2){
  if(array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    let squaredIndex = array2.indexOf(array1[i]**2);
    if (squaredIndex === -1) {
      return false;
    }
    array2.slice(squaredIndex, 1);
  }
  return true;
}



console.log("Input: [1,2,3],[4,1,9], expected: true, actual: ",same([1,2,3],[4,1,9]));
console.log("Input: [1,2,3],[1,9], expected: false, actual: ",same([1,2,3],[1,9]));
console.log("Input: [1,2,1],[4,4,1], expected: false, actual: ",same([1,2,1],[4,4,1]));

