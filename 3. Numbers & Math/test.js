const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trap(height) {
  let trappedWater = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] <= height[rightPointer]) {
      if (height[leftPointer] >= leftMax) {
        leftMax = height[leftPointer];
      } else {
        trappedWater += leftMax - height[leftPointer];
      }
      leftPointer++;
    } else {
      if (height[rightPointer] >= rightMax) {
        rightMax = height[rightPointer];
      } else {
        trappedWater += rightMax - height[rightPointer];
      }
      rightPointer--;
    }
  }

  return trappedWater;
}

console.log(trap(heights));
