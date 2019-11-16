/*
 * Implement all your JavaScript in this file!
 */

// Clicking buttons
let screen = $("#display")
let CALC_BUFFER = '';
let OPERATOR = '';
let CALC_MEMORY = 0;

function add(x, y) {
  return Number(x) + Number(y);
};

function subtract(x, y) {
  return Number(x) - Number(y);
};

function multiply(x, y) {
  return Number(x) * Number(y);
};

function divide(x, y) {
  return Number(x) / Number(y);
};


function equals(x, y) {
  if (!x) {
    x = 0;
  }
  let result;
  switch(OPERATOR) {
    case 'add': 
      result = add(x, y);
      break;
    case 'sub':
      result = subtract(x, y);
      break;
    case 'div':
      result = divide(x, y);
      break;
    case 'mult':
      result = multiply(x, y);
      break;
  }
  return result;
}

function operation(operator) {
   if (OPERATOR == '') {
    OPERATOR = operator;
  }
  CALC_MEMORY = equals(CALC_MEMORY, CALC_BUFFER);
  OPERATOR = operator;
  CALC_BUFFER = '';
  display(CALC_MEMORY);
}

function display(buffer) {
  return screen.val(buffer);
}

$("button[id^=button]").click(function() {
  let input_number = $(this).val();
  CALC_BUFFER = CALC_BUFFER.concat(input_number);
  display(CALC_BUFFER);
});

$("#clearButton").click(function() {
  CALC_BUFFER = '';
  CALC_MEMORY = ''
  OPERATOR = '';
  display(CALC_BUFFER);
});

$("#addButton").click(function() {
  operation('add');
});

$("#subtractButton").click(function() {
  operation('sub');
});

$("#multiplyButton").click(function() {
  operation('mult')
});

$("#divideButton").click(function() {
  operation('div')
});



$("#equalsButton").click(function() {
    result = equals(CALC_MEMORY, CALC_BUFFER);
    CALC_MEMORY = '';
    CALC_BUFFER = result;
    display(CALC_BUFFER);
});

