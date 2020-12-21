// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.



let reArrange = (arr) => {
    let neg = [],
    pos = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            neg.push(arr[i]);
        }
        if(arr[i] > 0) {
            pos.push(arr[i]);
        }
    }
    return neg.concat(pos);
  }

console.log("Input: [10,-1,20,4,5,-9,-6], expected: [-1,-9,-6,10,20,4,5], actual: ",reArrange([10,-1,20,4,5,-9,-6]));
 