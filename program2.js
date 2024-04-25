function smallest_missing_positive_integer(nums) {

  nums = nums.filter((num) => num > 0);
  const numSet = new Set(nums);

  
  let smallestMissing = 1;
  while (numSet.has(smallestMissing)) {
    smallestMissing++;
  }

  return smallestMissing;
}

console.log(smallest_missing_positive_integer([3, 4, -1, 1])); 
console.log(smallest_missing_positive_integer([1, 2, 0])); 
console.log(smallest_missing_positive_integer([-1, -3, 4, 2]));
