let log = console.log;
let nums = [7, 3, 2, 6, 9, 1, 8];

let sortedNums = nums.sort((a, b) => a - b);

console.log(sortedNums);

function factorialOf(n) {
  if (n === null || typeof n !== "number" || n === 0) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialOf(5));

function isPrime(num) {
  if (num === null || typeof num !== "number") {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 3; i <= Math.floor(Number(Math.sqrt(num))); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(`Is 13 prime? ${isPrime(13)}`);
console.log(`Is 9 prime? ${isPrime(9)}`);
console.log(`Is 2 prime? ${isPrime(2)}`);
console.log(`Is 1 prime? ${isPrime(1)}`);
console.log(`Is 17 prime? ${isPrime(17)}`);
console.log(`Is 101 prime? ${isPrime(101)}`);

function getSumOfDigits(num) {
  if (num === null || typeof num !== "number" || !Number.isFinite(num)) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  if (num === 0) {
    return 0;
  }

  let absNum = Math.abs(num);
  let sum = 0;
  let remainingNum = absNum;
  while (remainingNum !== 0) {
    sum += remainingNum % 10;
    remainingNum = Math.floor(remainingNum / 10);
  }

  return sum;
}

log(getSumOfDigits(1234));

function isArmstrong(num) {
  if (
    num === null ||
    typeof num !== "number" ||
    !Number.isFinite(num) ||
    num < 0 ||
    num !== Math.floor(num)
  ) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  let numberOfDigits = num.toString().length;

  let tempNum = num;
  let sumOfPowers = 0;

  while (tempNum !== 0) {
    sumOfPowers += Math.pow(tempNum % 10, numberOfDigits);
    tempNum = Math.floor(tempNum / 10);
  }

  return num === sumOfPowers;
}

log(isArmstrong(407));
log(isArmstrong(123));
log(isArmstrong(8208));

function isStrong(num) {
  if (
    num === null ||
    typeof num !== "number" ||
    !Number.isFinite(num) ||
    num < 0 ||
    num !== Math.floor(num)
  ) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  if (num === 1 || num === 2) {
    return true;
  }

  let tempNum = num;
  let sumOfNumFactorial = 0;

  while (tempNum !== 0) {
    sumOfNumFactorial += factorialOf(tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }

  return sumOfNumFactorial === num;
}

log(isStrong(145));

/* function findGCDOf(arrayOfNums) {
  if (arrayOfNums === undefined || arrayOfNums.length === 0) {
    return "Invalid Input!!! Please insert an array of integers";
  }

  if (arrayOfNums.length === 1) {
    return arrayOfNums[0];
  }
}
 */

function multiplicationTableOf(num) {
  if (
    num === null ||
    typeof num !== "number" ||
    !Number.isFinite(num) ||
    num === 0
  ) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  for (let i = 1; i <= 10; i++) {
    log(`${num} * ${i} = ${num * i}`);
  }
  return;
}

multiplicationTableOf(9);

function largestNumOfThreeNums(num1, num2, num3) {
  if (
    !Number.isFinite(num1) ||
    !Number.isFinite(num2) ||
    !Number.isFinite(num3)
  ) {
    return "Invalid Input!!!, Please Input a Valid Integer";
  }

  if (num1 > num2 && num1 > num3) {
    return num1;
  }

  if (num2 > num1 && num2 > num3) {
    return num2;
  }

  if ((num3 > num1) & (num3 > num2)) {
    return num3;
  }
}

console.log(largestNumOfThreeNums(8, 6, 5));

function numIsPalindrome(num) {
  if (num < 0 && num % 10 === 0 && num !== 0) {
    return false;
  }

  if (num < 0) {
    return false;
  }

  if (num !== Math.floor(num)) {
    return false;
  }

  let tempNum = num;
  let reversedNum = 0;
  let carryForward = 0;
  let numberOfDigit = num.toString().length;
  let multiplier = Math.pow(10, numberOfDigit - 1);

  if (num !== 0 && num / multiplier < 1) {
    return "Invalid Input!!! Your Multi digit Number Can not start with zero";
  }

  while (tempNum !== 0) {
    carryForward = (tempNum % 10) * multiplier;
    reversedNum += carryForward;
    multiplier /= 10;
    tempNum = Math.floor(tempNum / 10);
  }

  return reversedNum === num;
}

log(numIsPalindrome(3625));
log(numIsPalindrome(1001));
// log(numIsPalindrome(01001));
log(numIsPalindrome(0));

function fibbSequenceTillNth(n) {
  if (n === isNaN(n) || n <= 0) {
    return "Invalid input!!! Please inter a positive Integer!";
  }

  if (n === 1) {
    return [0];
  }

  let fibb = [0, 1];

  if (n === 2) {
    return fibb;
  }

  while (fibb.length < n) {
    let lastItem = fibb[fibb.length - 1];
    let secondLastItem = fibb[fibb.length - 2];

    fibb.push(lastItem + secondLastItem);
  }
  return fibb;
}

console.log(fibbSequenceTillNth(-8));

function findGCDOf(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    console.log("Input must be a non-empty array of numbers.");
  }

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result = gcd(result, nums[i]);

    if (result === 1) {
      return 1;
    }
  }
  return result;
}

console.log(findGCDOf([3, 6, 12]));

function lcmOfNums(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return "Your input must be a non empty array of numbers.";
  }

  let result = nums[0];

  if (nums.length === 1) {
    return result;
  }

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }

    return Math.abs(a * b) / gcd(a, b);
  }

  for (let i = 1; i < nums.length; i++) {
    result = lcm(result, nums[i]);
  }

  return result;
}

console.log(lcmOfNums([6, 3]));
