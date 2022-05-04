//declare function with 'width' 'height' as parameters
function getArea(width, height, depth) {
	return width * height * depth;
}

//write the function into page with '10' '5' as arguments
document.getElementById("message").innerHTML = getArea(15, 5, 10);