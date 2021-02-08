// Given a sorted (in ascending order) integer array nums of n elements and a target value, 
// write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

let search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid =  Math.floor((left + right) / 2);
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
        return -1;
}

console.log("Input: [-1,0,3,5,9,12], 9, expected: 4, actual: ",search([-1,0,3,5,9,12], 9));
console.log("Input: [5], 5, expected: 0, actual: ",search([5], 5));
