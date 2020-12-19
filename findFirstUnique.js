// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.



let findFirstUnique = (arr) => {
    let j;
    for(let i = 0; i < arr.length; i++) {
        j=0;
        while(j<arr.length) {
            if((i != j) && arr[i] == arr[j]){
                break;
            }
            j+=1;
        }
        if(j == arr.length){
            return arr[i];
        }
    }
    return null;
  }

  console.log("Input: [9,9,3,2,6,6], expected: 3, actual: ",findFirstUnique([9,9,3,2,6,6]));
