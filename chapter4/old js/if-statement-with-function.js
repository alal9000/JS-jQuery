var score = 75;		// Score
var msg = '';			// Message

function congratulate() {
	msg += 'Congratulations! ';
}

if (score >= 50) {		// If score is 50 or more
	congratulate();
	msg += 'Proceeed to the next round.';
	msg += 'You are doing great.';
}


var el = document.getElementById('answer');
el.textContent = msg;
