function sortedUnion(array){
  let map = {};
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    let arr = arguments[i];

    for (let j = 0; j < arr.length; j++) {
      console.log("arrArgument[j]",arr[j]);

      if(!map[arr[j]]) {
        map[arr[j]] = true;
        result.push(arr[j]);
      }
    }
  }

  return result;

}



console.log("Input: [1, 3, 2], [5, 2, 1, 4], [2, 1], expected: [1, 3, 2, 5, 4], actual: ",sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]));
