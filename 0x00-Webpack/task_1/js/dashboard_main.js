import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Initialize counter
let count = 0;

// Update counter function
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Add necessary elements to the DOM
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks on the button</p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Bind _.debounce to button click
$('button').on('click', _.debounce(updateCounter, 300));
