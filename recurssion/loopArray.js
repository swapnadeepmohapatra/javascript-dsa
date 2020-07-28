let sum = 0;
function iterate(arr, start = 0) {
  if (start === arr.length || start < 0 || start > arr.length) {
    return;
  }

  iterate(arr, start + 1);
  //   return arr;
  //   console.log(arr[start]);
}
console.log(iterate([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// iterate([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// iterate([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 3 + 6 + 9 = 18
// console.log(sum);
