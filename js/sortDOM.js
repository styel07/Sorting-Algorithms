// DOM stuffs
function initDomElements() {
  var container = document.querySelector('#container');

  // creates a div element with an id of 'inputArea'
  var divInputArea = document.createElement('div');
  divInputArea.id = 'inputArea';

  // attaches inputArea to container
  container.appendChild(divInputArea);


  // creates input forms
  // creates input box for user to input and array
  var inputTextBox = document.createElement('input');
  inputTextBox.id = 'inputArray';
  inputTextBox.value = 'Input array';
  inputTextBox.addEventListener('click', function() {
    inputTextBox.value = '';
  });

  //appends input filed to div inputArea
  divInputArea.appendChild(inputTextBox);

  // creates a button that triggers the sort function
  var button = document.createElement('button');
  button.id = 'submit';
  button.innerHTML = 'submit';
  button.addEventListener('click', function(evt) {
    var userInput = document.querySelector('#inputArray').value;
    userInput = JSON.parse(userInput);
//    var result = Array.isArray(userInput);
    console.log('click');
    bubble.sort(userInput);

  });

  // appends button to div inputArea
  divInputArea.appendChild(button);
}

//[6,1,3,4]

//evt.preventDefault();
//alert(userInput);
//console.log(userInput);
//if (result) {

//} else {
  //alert('HALAAA!!!');
//}

function printToDOM(sortedArray) {
  // attaches a paragraph tag for displaying text
  var para = document.createElement('p');
  para.innerHTML = sortedArray;
  container.appendChild(para);
}

// instanciate all functions
var bubble = BubbleSort();
var init = initDomElements();