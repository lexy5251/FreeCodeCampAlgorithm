// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, 
// the second will have the smallest, and the third will have the second-largest and so on. 
// In other words, all the odd-numbered indices will have the largest numbers in the array in descending order,
// and the even-numbered indices will have the smallest numbers in ascending order.


let maxMin = (arr) => {
    let result = [];
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        result.push(arr[arr.length-i-1]);
        result.push(arr[i]);
    }

    if(arr.length%2){
        result.push(arr[Math.floor(arr.length / 2)])
    }

    return result;
}

console.log("Input: [1,2,3,4,5], expected: [5,1,4,2,3], actual: ",maxMin([1,2,3,4,5]));
console.log("Input: [1,2,3,4,5,6,7], expected: [7,1,6,2,5,3,4], actual: ",maxMin([1,2,3,4,5,6,7]));
