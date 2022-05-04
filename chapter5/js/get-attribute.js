var firstItem = document.getElementById('one');			// Get the first list item and store in variable firstItem

if (firstItem.hasAttribute('class')) {					// If it has class attribute
	var attr = firstItem.getAttribute('class');			// Get the attribute value and store it in variable attr
	
	// Add the value of the attribute after the list
	var el = document.getElementById('scriptResults');
	el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}