const arr = [4, 600, 2, 5, 7, -9, 1, 3];
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right > left) {
    const pivotIdx = pivot(arr, left, right);
    let leftSort = quickSort(arr, left, pivotIdx - 1);
    let rightSort = quickSort(arr, pivotIdx + 1, right);
  }
}
console.log(arr);
quickSort(arr);
console.log(arr);

function pivot(arr, left, right) {
  let pivot = left;

  while (left < right) {
    while (arr[left] <= arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left < right) swap(arr, left, right);
  }
  swap(arr, pivot, right);
  return right;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
