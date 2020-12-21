// Implement a function rightRotate(arr,n) that will rotate the given array by n.


let rightRotate = (arr, n) => {
    let result = [];
    for(let i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for(let i = 0; i < arr.length-n; i++) {
        result.push(arr[i]);
    }
    return result;
  }

  console.log("Input: [1,2,3,4,5], 3, expected: [3,4,5,1,2], actual: ",rightRotate([1,2,3,4,5], 3));
 