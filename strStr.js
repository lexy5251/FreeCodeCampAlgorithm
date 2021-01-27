// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

let strStr = (haystack, needle) => {
    let h = haystack.length;
    let n = needle.length;
    if(needle === '') return 0;
    if(h < n) return -1;
    
    for(let i = 0; i < h-n+1; i++) {
        if(haystack[i] === needle[0]) {
            for(let j = 0; j < needle.length; j++) {
                if(needle[j] != haystack[i+j]) {
                    break;
                } else if(j === needle.length -1) {
                    return i;
                }
            }
        }
    }    
    
    return -1;
}

console.log("Input: 'hello','ll' , expected: 2, actual: ",strStr('hello','ll'));
console.log("Input: 'aaaaa','bba' , expected: -1, actual: ",strStr('aaaaa','bba'));
