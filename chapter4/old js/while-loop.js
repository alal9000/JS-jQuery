var i = 1;		// Set counter to 1
var msg = '';	// Message

// Store 5 times table in a variable
while (i < 13) {
	msg += i + 'x 5 = ' + (i * 5) + '<br />';
	i++;
}

document.getElementById('answer').innerHTML = msg;