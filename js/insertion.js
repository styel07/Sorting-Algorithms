function insertionSort() {

  var count = 0;
  var name = 'Insertion Sort';

  function sortI(array) {
  // Creating a for loop to keep the sort going till it reaches array.length (end of array)
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
    printToDOM(name, array);
    return array;
  }

  function returnCount() {
    return count;
  }

  return {
    sortI : sortI,
    count : returnCount
  };
}
