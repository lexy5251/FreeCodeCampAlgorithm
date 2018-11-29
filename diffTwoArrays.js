// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


let diffArray = (arr1, arr2) => {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArray.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArray.push(arr2[j]);
    }
  }
  return newArray;

}

console.log("Input: [1,2,3,5],[1,2,3,4,5], expected: [4], actual: ",diffArray([1,2,3,5],[1,2,3,4,5]));
console.log('Input: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"], expected: ["diorite", "pink wool"], actual: ', diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));