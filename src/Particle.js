class Particle {
	constructor(param = {}) {
		this.position = new Vector(param.x ?? 0, param.y ?? 0);
		this.r = r;
		this.mass = param.mass ?? 2;
		this.speed = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);

		this.forces = [];

		this.emptyCells = [];

		this.forDrawCells = {};

		this.counterAround = 0;



		this.fillColor = param.fillColor ?? `rgb(${getNewRange(0, window.innerWidth, 0, 255, this.position.x)} ${getNewRange(0, window.innerHeight, 0, 255, this.position.y)} 50)`;
	}

	get force() {
		return Vector.get().add(...this.forces);
	}

	draw(canvas) {
		canvas.fillCell({
			x: this.position.x,
			y: this.position.y,
			fillStyle: this.fillColor
		});
	}

	isHave(x, y, particles) {
		for (const particle of particles) {
			if (particle.position.x == x && particle.position.y == y) {
				return true;
			}
		}
		return false;
	}
}
