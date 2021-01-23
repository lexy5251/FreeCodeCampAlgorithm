// Given a string s and a string t, check if s is subsequence of t.


let singleNumber = (nums) => {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for(let key in obj) {
        if(obj[key] == 1) {
            return key;
        }
    }
  }

console.log("Input: [2,2,1], expected: 1, actual: ",singleNumber([2,2,1]));
console.log("Input: [1], expected: 1, actual: ",singleNumber([1]));
