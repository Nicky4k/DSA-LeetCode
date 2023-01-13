arr = [6, 92, 400, 56, 2, -1, -99];

/**
 * Bubble Sort
 * @param {*} arr
 * isSwapped is used to optimize the solution to take less time, if in a pass of j loop no swapping too place , we can say that the array is already sorted and break out of the for (i) loop.
 */
function bubbleSort(arr) {
  const length = arr.length - 1;
  for (let i = 0; i < length; i++) {
    let isSwapped = false;
    for (let j = 0; j < length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        isSwapped = true;
        arr[j + 1] = arr[j + 1] + arr[j];
        arr[j] = arr[j + 1] - arr[j];
        arr[j + 1] = arr[j + 1] - arr[j];
      }
    }
    if (!isSwapped) break;
  }
  console.log(arr);
}
bubbleSort(arr);
