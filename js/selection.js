function selectionSort(array) {

  var count = 0;
  var name = 'Selection Sort:';

  function sortS(array) {
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
    printToDOM(name, array);
    return array;
  }

  function returnCount() {
    return count;
  }

  return {
    sortS : sortS,
    count : returnCount
  };
}
