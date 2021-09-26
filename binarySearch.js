function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = list[mid];

    if (guess === item) return mid;

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

let arr = [1, 4, 7, 10, 16, 20];

// console.log(binarySearch(arr, 17));

function linearSearch(list, item) {
  for (let index in list) if (list[index] === item) return index;
}

console.log(linearSearch(arr, 10));
