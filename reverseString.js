// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

let reverseString = (s) => {
    let left = 0, right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }

    return s;
}

console.log("Input: ['h','e','l','l','o'], expected: ['o','l','l','e','h'], actual: ", reverseString(['h','e','l','l','o']));
