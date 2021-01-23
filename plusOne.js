// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.


let plusOne = (digits) => {
    for(let i = digits.length -1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; 
    }
    digits.unshift(1);
    return digits;
}

console.log("Input: [1,2,3], expected: [1,2,4], actual: ",plusOne([1,2,3]));
console.log("Input: [9], expected: [1,0], actual: ",plusOne([9]));
