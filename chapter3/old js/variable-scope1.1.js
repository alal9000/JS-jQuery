function getArea (width, height, depth) {
	var area = width * height;
	var volume = width * height * depth;
	return volume;
}

var wallSize = getArea(3, 2);
var wallSizeV = getArea(3, 2, 10);

document.write(wallSizeV);