mocha.setup('bdd');

var should = chai.should();
var expect = chai.expect;

describe('Bubble Sort', function() {

  // function
  it('should be a function', function() {
    BubbleSort.should.be.a('function');
  });

  // .sort
  describe('Sort method', function() {
    var bubble = BubbleSort();
    var bubble2 = BubbleSort();
    var arrayToBePassed = [6, 1, 3, 4];
    var arrayToBePassed2 = [9, 6, 8, 10, 1, 3, 2, 4];

    // [array]
    it('should be an array', function() {
      arrayToBePassed.should.to.be.an('array');
    });

    // .length
    it('should have a length of 4', function() {
      expect(arrayToBePassed).to.have.length(4);
    });

    // checks if array is sorted
    it('expects to have values sorted', function() {
      expect(bubble.sort(arrayToBePassed)).to.eql([ 1, 3, 4, 6 ]);
      expect(bubble2.sort(arrayToBePassed2)).to.eql([1, 2, 3, 4, 6, 8, 9, 10]);
    });

    // count
    it('should return the amount of swaps', function() {
      expect(bubble.count()).to.equal(3);
      expect(bubble2.count()).to.equal(19);
    });
  });
});

describe('Merge Sort', function() {
  it('should be a function', function() {
    MergeSort.should.be.a('function');
  });

  var mSort =
  describe('.sort', function() {
    it('should be a function', function() {

    });
  });

});

describe('Insertion Sort', function() {
  // var insert = InsertionSort();
  it('should be a function', function() {
    InsertionSort.should.be.a('function');
  });
});

describe('Selection Sort', function() {
  // var select = SelectionSort();
  it('should be a function', function() {
    SelectionSort.should.be.a('function');
  });
});

describe('Quick Sort', function() {
  // var quick = QuickSort();
  it('should be a function', function() {
    QuickSort.should.be.a('function');
  });
});

mocha.run();