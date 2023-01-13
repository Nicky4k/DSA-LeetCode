function insertionSort(arr) {
  let length = arr.length - 1;
  for (let i = 1; i <= length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
}
arr = [6, 92, 400, 56, 2, -1, -99];
insertionSort(arr);
