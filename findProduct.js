// Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself.


let findProduct = (arr) => {
    let result = [],
    temp = 1;
    for(let i = 0; i < arr.length; i++) {
        result[i] = temp;
        temp *= arr[i]; 
    }

    temp = 1;
    for(let i = arr.length -1; i >=0; i--) {
        result[i] *= temp;
        temp *= arr[i];
    }
  
    return result;
  }

  console.log("Input: [1,2,3,4], expected: [24,12,8,6], actual: ",findProduct([1,2,3,4]));
  console.log("Input: [1,3,4,5], expected: [60,20,15,12], actual: ",findProduct([1,3,4,5]));
