function bubbleSort() {

  var count = 0;
  var name = 'Bubble Sort:';

  function sortB(array) {
    var swapped;
    do {
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
    printToDOM(name, array);
    return array;
  }

  function returnCount() {
    return count;
  }

  return {
    sortB : sortB,
    count : returnCount
  };
}

function mergeSort() {

  var count = 0;
  var name = 'Merge Sort:';

  function sortM(array) {
    if (array.length < 2)
        return array;

    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));

    function merge(left, right) {
      var result = [];

      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
        count++;
      }

      while (left.length) {
        result.push(left.shift());
      }

      while (right.length) {
        result.push(right.shift());
      }

      printToDOM(name, array);
      return result;
    }

    //console.log('merge sort: ', mergeSort());
  } // end of sortM

  function returnCount() {
    return count;
  }

  // function init() {
  //   return "hello";
  // }

  // init();

  return {
    sortM : sortM,
    count : returnCount
  };
}// end of merge sort

//Given arrayay of unsorted numbers
var array = [2, 7, 4, 1, 9, 5];

function insertionSort (array) {
//Creating a for loop to keep the sort going till it reaches array.length (end of array)
  for (var i = 0; i < array.length; i++) {
    // assign the current array to our selected (we will be using this to compare)
    var currentSelected = array[i];
    //Our loop to keep comparing the currentSelected to the previous index, if the currentSelected
    // is less than the previous index, they will swap places. If currentSelected is higher, it will stay in place.
    for (var comparingIndex = i; comparingIndex > 0 && currentSelected < array[comparingIndex - 1]; comparingIndex--)
    //moving down the line
    array[comparingIndex] = array[comparingIndex - 1];
    // comparingIndex becomes our current selected
    array[comparingIndex] = currentSelected;
  }
  //exit the loop
  return array;
}
insertionSort(array);
console.log('Insertion Sort: ', array);

var a = [4, 65, 2, -31, 0, 99, 83, 782, 1];
insertionSort(a);
//document.write(a.join(" "));

// SELECTION SORT

// Given Array of unsorted numbers.
var array = [2, 7, 4, 1, 9, 5];

function selectionSort(array) {
  //Creating a loop for the index
  for (i = 0; i < array.length; i++) {
    //Using index 0 as our min since that is our first number
    var min = i;
    //Creating a loop for the index of the next number
    for (var nextNum = i + 1; nextNum < array.length; nextNum++) {
      //Checking if the value of the nextNum is less than the current min
      if (array[nextNum] < array[min]) {
        //Assign nextNum to the new min
        min = nextNum;
      }
    }
    //Creating a temporary value to store [i]
    var tmp = array[i];
    //Assigning the min to [i]
    array[i] = array[min];
    //Assigning tmp to our min
    array[min] = tmp;
  }
  return array;
}
//Console log sorted array
console.log('Selection Sort:', selectionSort(array));
var c = [47,49,5,99,4,5,63,2,4,43];

function quicksort(arr)
{
  if (arr.length == 0)
      return [];

  var left = new Array();
  var right = new Array();
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
