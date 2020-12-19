// Implement a function that merges two sorted arrays into another sorted array. 


let mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0, j = 0;

    while((i<arr1.length) && (j<arr2.length)){
      if(arr1[i] < arr2[j]){
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    if (i < arr1.length) {
      arr1.splice(0, i);
      mergedArray = mergedArray.concat(arr1);
    } else if (j < arr2.length) {
      arr2.splice(0, j);
      mergedArray = mergedArray.concat(arr2);
    }
  
    return mergedArray;
  }

  console.log("Input: [1,3,4,5],[2,6,7,8], expected: [1,2,3,4,5,6,7,8], actual: ",mergeSortedArrays([1,3,4,5],[2,6,7,8]));
