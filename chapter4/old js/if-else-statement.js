var pass = 50;		// Pass mark
var score = 90;		// Current score
var msg;			// Message

// Select message to write based on score
if (score >= pass) {
	msg = 'Nice Work!';
} else {
	msg = 'shame try again!';
}

// Write the contents of the msg variable into the page
var el = document.getElementById('answer');
el.textContent = msg;