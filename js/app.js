function BubbleSort() {
  var array = [];
  var count = 0;

  function sort(array) {
    var swapped;
    do {
      console.log('sorting');
      swapped = false;
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
          count++;
        }
      }
    } while (swapped);
    // call a function that writes to the DOM
    printToDOM(array);
    return array;
  }

  function returnCount() {
    return count;
  }

  return {
    sort : sort,
    count : returnCount
  };
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(arr) {
  var count = 0;

  function returnCount() {
    return count;
  }

  if (arr.length < 2)
      return arr;

  var middle = parseInt(arr.length / 2);
  var left   = arr.slice(0, middle);
  var right  = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
    this.count++;
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;

}
console.log('merge sort: ', mergeSort(a));

function insertionSort (bArray) {
  for (var i = 0; i < bArray.length; i++) {
      var k = bArray[i];
      for (var j = i; j > 0 && k < bArray[j - 1]; j--)
          bArray[j] = bArray[j - 1];
      bArray[j] = k;
  }
  return console.log('insertion: ', bArray);
}

var a = [4, 65, 2, -31, 0, 99, 83, 782, 1];
insertionSort(a);
document.write(a.join(" "));

var array = [56,4,35,63,4,2,63,2,14,1];

function selectionSort(array) {

  for (var i = 0; i < array.length; i++) { //Number of passes
    var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
    for (var j = i + 1; j < array.length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
      if (array[j] < array[min]) { //Compare the numbers
        min = j; //Change the current min number position if a smaller num is found
      }
    }
    if (min != i) { //After each pass, if the current min num != initial min num, exchange the position.
      //Swap the numbers
      var tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
}
console.log('selection sort: ', selectionSort(array));

var c = [47,49,5,99,4,5,63,2,8,43];

function quicksort(arr)
{
  if (arr.length == 0)
      return [];

  var left = [];
  var right = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));
}
console.log('quick sort: ', quicksort(c));
