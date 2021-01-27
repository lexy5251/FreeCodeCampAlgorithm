// Given two strings s and t , write a function to determine if t is an anagram of s.

let isAnagram = (s, t) => {
    const map = {};
    if(s.length != t.length) return false;
    for(let key of s) {
        if(map[key]) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    }
    for(let key of t) {
        if(!map[key]) return false;
        map[key]--;
    }
    return true;
}

console.log("Input: 'anagram','nagaram' , expected: true, actual: ",isAnagram('anagram','nagaram'));
console.log("Input: 'rat','car' , expected: false, actual: ",isAnagram('rat','car'));
