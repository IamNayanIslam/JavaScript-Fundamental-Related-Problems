function findMaxMin(arrayOfNums) {
  let max = arrayOfNums[0];
  let min = arrayOfNums[0];

  for (let i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] >= max) {
      max = arrayOfNums[i];
    } else if (arrayOfNums[i] <= min) {
      min = arrayOfNums[i];
    }
  }

  return {
    max: max,
    min: min,
  };
}

let nums = [27, 23, 17, 13, 38, 15];

console.log(findMaxMin(nums));

function sumOfElements(nums) {
  let sum = 0;

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  /* while (leftPointer <= rightPointer) {
    sum += nums[leftPointer] + nums[rightPointer];
    if (leftPointer === rightPointer) {
      sum -= nums[rightPointer];
    }
    leftPointer++;
    rightPointer--;
  } */

  return sum;
}

let myNums = [1, 2, 3, 4, 5];

console.log(sumOfElements(myNums));

function findAverage(nums) {
  return sumOfElements(nums) / nums.length;
}

console.log(findAverage(myNums));

function averageOf(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return "Your input must be a non empty array of numbers.";
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i];
  }

  return ans / nums.length;
}
let newNums = [7, 12, 9, 11, 3];

console.log(averageOf(newNums));

//Reverse an array without using reverse()

function reverse(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Your input must be a non empty array.";
  }

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let temp = arr[leftPointer];
    arr[leftPointer] = arr[rightPointer];
    arr[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
  return arr;
}

// let newNums = [7, 12, 9, 11, 3];
console.log(reverse(newNums));

// let newNums = [7, 12, 9, 11, 3];

function sortArr(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return "Your input must be a non empty array of numbers.";
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(sortArr(newNums));

const numbers = [2, 5, 8, 2, 9, 5, 1, 8];

function removeDuplicats(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Your Input Must Be a Non-Empty Array.";
  }
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicats(numbers));

const uniqNums = [5, 8, 2, 9, 1];

function secondLargestNum(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return "Your input must be a non-empty array of numbers";
  }

  for (let i = 0; i < nums.length; i++) {
    let currentBubble = nums[i];
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return `The second largest number is: ${nums[nums.length - 2]}`;
}

console.log(secondLargestNum(uniqNums));
