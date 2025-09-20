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
