// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


//solution 1
// let twoSum = (arr, num) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         result.push(i);
//         result.push(j);
//         return result;
//       }
//     }
//   }
//   return result;
// }


//solution 2
let twoSum2 = (arr, num) => {
  let result = [];
  let obj = {};
  for (let i=0;i<arr.length;i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {

      if (obj[num - arr[i]]) {
        result.push(i);
        result.push(obj[num - arr[i]]);
        return result;
      }
  }
  return result;
}


console.log("Input: [2, 7, 11, 15], 9, expected: [0, 1], actual: ", twoSum2([2, 7, 11, 15], 9));
console.log("Input: [2, 7, 11, 15], 10, expected: [], actual: ", twoSum2([2, 7, 11, 15], 10));