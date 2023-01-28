let arr = [1, 2, 2, 2, 8, 8, 8, 3, 5, 4, 5, 5, 4, 5, 6, 7, 7, 8, 7];
let obj = {};

function freequencies(arr) {
  for (i = 0; i < arr.length; i++) {
    count = 1;
    for (j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    let exist = arr[i].toString() in obj;
    if (!exist) {
      obj[arr[i]] = count;
    }
  }
  return obj
}

let a = freequencies(arr)

console.log(a);
