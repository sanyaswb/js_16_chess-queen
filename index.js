function queen(x1, y1, x2, y2) {
	return Math.abs(x1 - x2) === Math.abs(y1 - y2) || x1 === x2 || y1 === y2;
}

module.exports = queen;
