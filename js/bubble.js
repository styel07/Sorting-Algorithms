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