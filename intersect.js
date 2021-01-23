// Given two arrays, write a function to compute their intersection.

let intersect = (nums1, nums2) => {
    let result = [];
    let obj = {};
    for(let i = 0; i < nums1.length; i++) {
        if(obj[nums1[i]]) {
            obj[nums1[i]] += 1;
        } else {
            obj[nums1[i]] = 1;
        }
    }
    for(let i = 0; i < nums2.length; i++) {
        if(obj[nums2[i]] && obj[nums2[i]] > 0) {
            result.push(nums2[i]);
            obj[nums2[i]] -= 1;
        }
    } 
    
    return result;
}

console.log("Input: nums1 = [1,2,2,1], nums2 = [2,2], expected: [2,2], actual: ",intersect([1,2,2,1],[2,2]));
console.log("Input: nums1 = [4,7,9,7,6,7], nums2 = [5,0,0,6,1,6,2,2,4], expected: [4,6], actual: ",intersect([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]));
