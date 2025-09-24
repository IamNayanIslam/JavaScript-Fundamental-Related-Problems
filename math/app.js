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
