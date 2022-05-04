var msg = 'Sign Up & Receive 10% off Today!';
function updateMessage() {
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMessage();

function getArea(width, height) {
	return width * height;
}

getArea(3, 5);
 