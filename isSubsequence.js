// Given a string s and a string t, check if s is subsequence of t.


let isSubsequence = (s, t) => {
    let i = 0, j = 0;
    while(j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length ? true: false;
  }

console.log("Input: 'abc', 'ahbgdc', expected: true, actual: ",isSubsequence('abc', 'ahbgdc'));
console.log("Input: 'axc', 'ahbgdc', expected: false, actual: ",isSubsequence('axc', 'ahbgdc'));
