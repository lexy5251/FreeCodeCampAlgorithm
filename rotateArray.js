// Given an array, rotate the array to the right by k steps, where k is non-negative.


let rotateArray = (nums, k) => {
    k %= nums.length;
    
    let reverse = (i, j) => {
        while(i < j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    reverse(0, nums.length-1);
    reverse(0, k-1);
    reverse(k, nums.length-1);  
    return nums;
}

console.log("Input: [1,2,3,4,5,6,7], 3, expected: [5,6,7,1,2,3,4], actual: ",rotateArray([1,2,3,4,5,6,7], 3));
console.log("Input: [-1], 2, expected: [-1], actual: ",rotateArray([-1], 2));
