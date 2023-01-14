const arr = [-100, 50, 200, 0, -2220, 40, -20, -500];

function selectionSort(arr) {
  let size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[i] + arr[min];
    arr[min] = arr[i] - arr[min];
    arr[i] = arr[i] - arr[min];
  }
  console.log(arr);
}
selectionSort(arr);
