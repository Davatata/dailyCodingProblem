/**
 * Given an array of integers, return a new array such that 
 * each element at index i of the new array is the product of 
 * all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected 
output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], 
the expected output would be [2, 3, 6].
 */

 function othersProduct(nums) {
  let product = nums.reduce( (a,b) => a * b);
  nums = nums.map( num => {
    return product / num;
  });
  return nums;
 }

 console.log(othersProduct([1, 2, 3, 4, 5]));
 console.log(othersProduct([3, 2, 1]));