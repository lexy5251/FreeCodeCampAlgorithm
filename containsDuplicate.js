// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice 
// in the array, and it should return false if every element is distinct.

let containsDuplicate = (nums) => {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1;
        }
        if(obj[nums[i]] > 1) {
            return true;
        }
    }
    return false;
  }

console.log("Input: [1,2,3,1], expected: true, actual: ",containsDuplicate([1,2,3,1]));
console.log("Input: [1,2,3,4], expected: false, actual: ",containsDuplicate([1,2,3,4]));
