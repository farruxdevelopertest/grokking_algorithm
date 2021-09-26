function findSmallestIndex(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i in arr) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return newArr;
}

let arr = [4, 56, 34, 2, 10];

console.log(selectionSort(arr));
