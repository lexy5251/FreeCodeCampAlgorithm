// Let’s say your teammate is working on a JavaScript code that won’t run 
// because the brackets (square, curly, round) are not properly nested. 
// You then decide to write a Parentheses Checker function, which efficiently 
// checks whether or not the input string’s opening and closing brackets are correctly nested.


let balancedParentheses = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
        } else {
            let lastElement = stack.pop();
            if(str[i] !== map[lastElement]) {
                return false;
            }
        }
    }
    if(stack.length !== 0) {
        return false;
    }
    return true;
  
  }
  
console.log("Input: {[]()}, expected: true, actual: ",balancedParentheses("{[]()}"));
console.log("Input: {[(])}, expected: false, actual: ",balancedParentheses("{[(])}"));
console.log("Input: {[}, expected: false, actual: ",balancedParentheses("{[}"));
