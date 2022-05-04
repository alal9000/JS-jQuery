var scores = [24, 32, 17, 60, 53, 21, 66, 99, 100, 200, 173, 63, 90, 91, 83];			// Array of scores
var arrayLength = scores.length		// Number of items in array
var roundNumber = 0;				// Current round
var msg = '';						// Message
var i;								// Counter

// Loop through the items in the array
for (i = 0; i < arrayLength; i++) {
	
	// Arrays are zero based (so 0 is round 1)
	// Add one to the current round
	roundNumber = (i + 1);
	
	// Write the current round to message
	msg += 'Round ' + roundNumber + ': ';
	
	// Get the scores from the scores array
	msg += scores[i] + '<br />'
}

// Write the contents of the msg variable to the page
document.getElementById('answer').innerHTML = msg;