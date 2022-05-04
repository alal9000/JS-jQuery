// Create the array
var colors = ['white', 
				'black',
				'custom'];
				
// Update third item in the array
colors[2] = 'beige';

// Get the element with the id of colors
var el = document.getElementById('colors');

// Replace the third item from the array
el.textContent = colors[2];