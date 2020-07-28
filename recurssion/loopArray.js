let sum = 0;
function iterate(arr, start = 0) {
  if (start === arr.length || start < 0 || start > arr.length) {
    return;
  }

  console.log(arr[start]);
  iterate(arr, start + 1);
}
iterate([1, 2, 3, 4, 5, 6, 7, 8, 9]);
