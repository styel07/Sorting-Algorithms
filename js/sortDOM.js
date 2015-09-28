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
    inputTextBox.value = '[6,3,1,4,8,9,12,2]';
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
//  var result = Array.isArray(userInput);
    console.log('click');
    bubble.sortB(userInput);
    merge.sortB(userInput);

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

function printToDOM(methodName, sortedArray) {
  // creates a p tag for the method name
  var methodNameContainer = document.createElement('p');
  methodNameContainer.innerHTML = methodName;

  // creates a p tag for the sorted array
  var para = document.createElement('p');
  para.innerHTML = sortedArray;

  //container.appendChild(para);
  container.appendChild(methodNameContainer);
  container.appendChild(para);
}

// instanciate all functions
var bubble = bubbleSort();
var merge = mergeSort();
var init = initDomElements();