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