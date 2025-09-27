const moveByK = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Your input must be a non empty array";
  }

  let n = arr.length;
  let temp = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = temp;

  return arr;
};

let my_arr = [1, 2, 3, 4, 5];

console.log(moveByK(my_arr));
