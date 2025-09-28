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
