const moveByK = (arr, k) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Your input must a non-empty array!";
  }

  const n = arr.length;
  k = k % n;

  if (k === 0) {
    return arr;
  }

  const movedPart = arr.slice(n - k);
  const remainingPart = arr.slice(0, n - k);

  return movedPart.concat(remainingPart);
};

console.log(moveByK([1, 2, 3, 4, 5], 5));

const findArrayIntersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const intersection = new Set();

  for (const element of arr2) {
    if (set1.has(element)) {
      intersection.add(element);
    }
  }
  return Array.from(intersection);
};

const arrayA = [1, 4, 9, 16, 25, 4];
const arrayB = [9, 5, 4, 1, 1, 2];

const commonElements = findArrayIntersection(arrayA, arrayB);

console.log(`Array A: ${arrayA}`);
console.log(`Array B: ${arrayB}`);
console.log(`Intersection (Unique): ${commonElements}`); // Output: [9, 4, 1]
