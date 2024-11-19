// Import dependencies
import $ from 'jquery';
import _ from 'lodash';

// Initialize counter
let count = 0;

// Function to update the counter
function updateCounter() {
  count++;
  const text = count === 500 ? "500 clicks on the button! You've reached a milestone!" : `${count} clicks on the button`;
  $('#count').text(text);
}

// Add necessary elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks on the button</p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Attach the debounce function to the button
$('button').on('click', _.debounce(updateCounter, 300));
