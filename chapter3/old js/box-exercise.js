function calculateArea(width, height) {
	var area = width * height;
	return area;
}

var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

//write the function into page using variable '10' '5' as arguments
document.getElementById("message").innerHTML = wallOne;