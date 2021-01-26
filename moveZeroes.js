// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let moveZeroes = (nums) => {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            let temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp;
            index++;
        }
    }
    return nums;
}

console.log("Input: [0,1,0,3,12], expected: [1,3,12,0,0], actual: ", moveZeroes([0,1,0,3,12]));
