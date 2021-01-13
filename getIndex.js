// Given an unsorted array of numbers and another number, 
// you are required to find the index at which the number would be placed 
// if it were to be inserted in a sorted version of the array of numbers.

let getIndex = (arr, index) => {
    for(let i = 0; i < arr.length; i++) {
        if(i == index){
            return arr[i];
        }
    }
  }

console.log("Input: '[5,4,1,3],2', expected: 1, actual: ",getIndex([5,4,1,3],2));