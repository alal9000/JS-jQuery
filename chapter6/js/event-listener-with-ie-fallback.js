var elUsername = document.getElementById('username');		// Get username input
var elMsg = document.getElementById('feedback');		// Get feedback element

function checkUsername(minLength) {		// Declare function
	if (elUsername.value.length < minLength) {		// If username too short
		elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';	// Set msg
	} else {						// Otherwise
		elMsg.innerHTML = '';		// Clear msg
	}		
			
}

if (elUsername.addEventListener) {							// If event listener supported
elUsername.addEventListener('blur', function() {			// When username loses focus
	checkUsername(5);
}, false);
} else {												// Otherwise
	elUsername.attachEvent('onblur', function() {		// IE fallback onblur
		checkUsername(5);								// Call checkUsername()
	});
}