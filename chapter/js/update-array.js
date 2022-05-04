//Create the array
var colors = ['white', 'black', 'green', 'blue', 'red'];

//Update the third item in the array
colors[3] = 'yellow';

//Get the element with an id of colors
var el = document.getElementById('colors');

//Replace with third item from the array & write into page
el.textContent = colors[3];