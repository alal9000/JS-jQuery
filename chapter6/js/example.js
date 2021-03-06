var noteInput, noteName, textEntered, target;			// Declare variables

noteName = document.getElementById('noteName');			// Element that holds note
noteInput = document.getElementById('noteInput');		// Input for writing the node

function writeLabel(e) {								// Declare function
	if (!e) {											// If event object not present
		e = window.event;								// Use IE5-8 fallback
	}
	target = e.target || e.srcElement;					// Get target of event
	textEntered = target.value;							// Value of that element
	noteName.textContent = textEntered;					// Update note text
	
}

// This is where the record / pause controls and functions go...

if (document.addEventListener) {				// If event listener supported
	document.addEventListener('click', function(e) {	// For any click document
		recorderControls(e);					// Call recorder controls
	}, false);								// Capture during bubble phase
	
	noteInput.addEventListener('input', writeLabel, false);		// If input event fires on noteInput, call writeLabel()
	
	
} else {										// Otherwise
	document.attachEvent('onclick', function(e) {		// IE fallback: any click
	recorderControls(e);								// Calls recorderControls()
	});
	
	
	
	noteInput.attachEvent('onkey', writeLabel);			// If keyup events fires on noteInput, call writeLabel()
	
}

function recorderControls(e) {				// Declare recorderControls()
	if (!e) {								// If event object nor present
		e = window.event;					// Use IE5-8 fallback
	}
	target = e.target || e.srcElement;		// Get the target element
	if (e.preventDefault) {					// If preventDefault() supported 
		e.preventDefault();					// Stop default action
	} else {								// Otherwise
		e.returnValue = false;				// IE fallback: stop default action
	}
	
	
	switch(target.getAttribute('data-state')) {			// Get the data-state attribute
		case 'record':									// If its value is record
			record(target);								// Call the record() function
			break;										// Exit function to where called
		case 'stop':									// If its value is stop
			stop(target);								// Call the stop() function
			break;										// Exit function to where called
			// More buttons could go here
	}
	
	
	
	
}

function record(target) {							// Declare function
	target.setAttribute('data-state', 'stop');		// Set data-state attribute to stop 
	target.textContent = 'stop';					// Set text to 'stop'
}


function stop(target) {							
	target.setAttribute('data-state', 'record');		// Set data-state attribute to record 
	target.textContent = 'record';						// Set text to 'record'												// Set data-state attribute to stop
	
}