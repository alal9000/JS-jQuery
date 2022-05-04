var today = new Date();
var hourNow = today.getHours();
var greeting;
var minuteNow = today.getMinutes();

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good Morning!';
} else {
	greeting = 'Welcome!';
}

document.write('<h2>' + greeting + '</h2>')

var shape = 600 * 763;


document.write('<h2>' + shape + '</h2>')

document.write('<h2>' + hourNow + '</h2>')

document.write('<h2>' + minuteNow + '</h2>')
