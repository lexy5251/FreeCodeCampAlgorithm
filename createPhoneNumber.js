// In this challenge, you have to define a function, createPhoneNumber, 
// that accepts an array of 10 integers (between 0 and 9). 
// It should return a string of those numbers in the form of a phone number.

let createPhoneNumber = (arr) => {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;

}

console.log("Input: '[1,2,3,4,5,6,7,8,9,0]', expected: '(123) 456-7890, actual: ",createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

