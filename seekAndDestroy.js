// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

let destroyer = (arr, ...nums) => {
  let obj = {};
  let newArr = [];
  for (let i = 0; i < nums.length; i++){
    obj[nums[i]] = true;
  }

  for (let i = 0; i < arr.length; i++) {
     if (!obj[arr[i]]) {
       newArr.push(arr[i]);
     }
  }

  return newArr;

}

console.log("Input: [1, 2, 3, 1, 2, 3], 2, 3, expected: [1, 1], actual: ", destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log('Input: ["tree", "hamburger", 53], "tree", 53, expected: ["hamburger"], actual: ', destroyer(["tree", "hamburger", 53], "tree", 53));