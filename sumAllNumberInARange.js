// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

let sumAll = (array) => {
  if (array[0] === array[1]) {
    return array[0] * 2;
  }

  let sum = 0;
  let small = array[0];
  let large = array[1];
  if (small > large) {
    let temp = small;
    small = large;
    large = temp;
  }
  for (let i = small;i<=large;i++) {
    sum += i;
  }

  return sum;

}


console.log("Input: 1, 5, expected: 15, actual: ", sumAll([1, 5]));
console.log("Input: 4, 2, expected: 9, actual: ", sumAll([4, 2]));
console.log("Input: 5, 5, expected: 10, actual: ", sumAll([5, 5]));

