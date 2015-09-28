function mergeSort() {

  var count = 0;
  var name = 'Merge Sort:';

  function start(array) {

    if (array.length < 2) {
      return array;
    }

    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);

    var sortedArray = merge(start(left), start(right));

    return sortedArray;
    // return merge(start(left), start(right));

    printToDOM(name, sortedArray);

  }

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

    return result;
  }

  function returnCount() {
    return count;
  }

  return {
    start : start,
    count : returnCount
  };
}