// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases

let isPalindrome = (s) => {
    if (s.length == 0) {
        return true;
      }
      s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  
      let head = 0, tail = s.length - 1;
      while(head < tail) {
          let cHead = s[head];
          let cTail = s[tail];
          if(cHead!= cTail) {
              return false;
          }
          head++;
          tail--;
          
      }
      return true;
}

console.log("Input: 'A man, a plan, a canal: Panama' , expected: true, actual: ",isPalindrome('A man, a plan, a canal: Panama'));
console.log("Input: 'race a car' , expected: false, actual: ",isPalindrome('race a car'));
