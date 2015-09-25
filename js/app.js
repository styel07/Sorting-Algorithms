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
    console.log(array);
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

var bubble = BubbleSort();
var init = initDomElements();

// function MergeSort() {

// }

// function InsertionSort() {

// }

// function BubbleSort() {

// }

// function BubbleSort() {

// }
