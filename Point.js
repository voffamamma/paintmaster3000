function Point(x,y) {
	this.x = x;
	this.y = y;

	this.log = function(name) {
		console.log((name || '') + ' @ ' + this.x + ',' + this.y);
	}

	this.substract = function(point) {
		return new Point(this.x - point.x, this.y - point.y);
	}
}
