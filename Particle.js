class Particle {
	constructor(param = {}) {
		this.position = new Vector(param.x ?? 0, param.y ?? 0);
		this.r = 1;
	}


	draw(canvas) {
		canvas.drawCircle({
			x: this.position.x,
			y: this.position.y,
			r: this.r,
			fillStyle: "green",
		});
	}
}
