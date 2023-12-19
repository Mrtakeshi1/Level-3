function solution(arr) {
  // The solution function takes an array 'arr' as input.
  const nums = arr.filter(val => val != -1).sort((a, b) => a - b);

  // It first filters out all values that are not equal to -1 (non-(-1) values) using the filter method. 
  // These non-(-1) values are stored in the 'nums' array.

  // The 'nums' array is then sorted in ascending order using the sort method, 
  // ensuring that all non-(-1) values are arranged in increasing order.

  return arr.map(val => (val === -1 ? val : nums.shift()));

  // The code then uses the map method to iterate over each element of the input array arr. 
  // For each element, it checks if the element is equal to -1:

  // If the element is equal to -1, it pushes -1 into the result array. 
  // This ensures that the original positions of -1 values are retained in the final array.
  // If the element is not equal to -1, it pushes the next value from the 'nums' array 
  // (by using shift() which removes and returns the first element of the array) into the result array. 
  // This ensures that non-(-1) values are replaced with their sorted counterparts.

}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([5, 3, 1]));
console.log(solution([-1, -1, -1, -1]));
console.log(solution([100, -1, 50, -1, 75]));


function countVowels(str) {
  // The countVowels function takes a single argument str, which is the input string you want to count vowels in.

  const matches = str.match(/[aeiou]/gi);
  // Inside the function, the str.match(/[aeiou]/gi) line uses the match method with a regular expression [aeiou] to find all vowels 
  // (both lowercase and uppercase) in the input string str. 
  // The g flag makes it search for all occurrences of vowels in the string, 
  // and the i flag makes it case-insensitive, so it will match both lowercase and uppercase vowels.

  return matches ? matches.length : 0;
  // The result of the match method is an array containing all the matched vowels or null if there are no matches.
  // The return statement checks if there are any matches (i.e., the result is not null). 
  // If there are matches, it returns the length of the matches array, which represents the count of vowels in the input string. 
  // If there are no matches, it returns 0.
}

// const input = "Hello, World!";
// const vowels = countVowels(input);
// console.log(countVowels(input)); // Output: 3


// function countVowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

function findSumOfTwo(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numMap[complement] !== undefined) {
      return [complement, numbers[i]];
    }

    numMap[numbers[i]] = i;
  }

  return [];
}

const numbers = [2, 4, 7, 11, 15];
const target = 9;

console.log(findSumOfTwo(numbers, target)); // Output: [2, 7]

// function findSumOfTwo(numbers2, target2) {
//   const numMap = {};

//   for (let i = 0; i < numbers2.length; i++) {
//     const complement = target2 - numbers2[i];

//     if (numMap[complement] !== undefined) {
//       return [complement, numbers2[i]];
//     }

//     numMap[numbers2[i]] = i;
//   }

//   return [];
// }


// const numbers2 = [5, 12, 3, 9, 1];
// const target2= 8;

// console.log(findSumOfTwo(numbers2, target2)); // Output: [3, 5