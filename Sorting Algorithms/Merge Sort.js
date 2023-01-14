const arr = [4, 12, 8, 2, 270];

function split(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    split(arr, left, mid);
    split(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

split(arr);

function merge(arr, left, mid, right) {
  let b = [];
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      b[k] = arr[i];
      i++;
    } else {
      b[k] = arr[j];
      j++;
    }
    k++;
  }
  if (i > mid) {
    while (j <= right) {
      b[k] = arr[j];
      k++;
      j++;
    }
  } else {
    while (i <= mid) {
      b[k] = arr[i];
      k++;
      i++;
    }
  }
  for (let k = left; k <= right; k++) {
    arr[k] = b[k];
  }
}
console.log(arr);
