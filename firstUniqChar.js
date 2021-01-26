// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

let firstUniqChar = (s) => {
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]){
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] == 1) return i;
    }
    return -1;
}

console.log("Input: 'leetcode', expected: 0, actual: ", firstUniqChar('leetcode'));
console.log("Input: 'loveleetcode', expected: 2, actual: ", firstUniqChar('loveleetcode'));
