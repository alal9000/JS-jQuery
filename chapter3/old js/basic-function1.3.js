
//declare function with 'width' 'height' as parameters
function getArea(width, height) {
	return width * height;
}

//write the result of the function into page with '10' '5' as arguments
document.getElementById("message").innerHTML = getArea(18, 5);