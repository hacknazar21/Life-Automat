const G = 0.8;
const P = 1;
const COLLAPSE_LENGTH = 0.00001;
const canvas = new Canvas();

let particles = [];


const centerX = canvas.view.width / 2;
const centerY = canvas.view.height / 2;
const paddingLeftRight = 10;
const paddingTopBottom = 10;

for (let index = 0; index < 200; index++) {
	particles.push(
		new Particle({
			x: getRandomBetween(paddingLeftRight, canvas.view.width - paddingLeftRight),
			y: getRandomBetween(paddingTopBottom, canvas.view.height - paddingTopBottom),
		}));
}
/* particles.push(
	new Particle({
		x: centerX,
		y: centerY - 4,
	}));
particles.push(
	new Particle({
		x: centerX + 4,
		y: centerY,
	}));
particles.push(
	new Particle({
		x: centerX - 4,
		y: centerY + 4,
	}));
particles.push(
	new Particle({
		x: centerX,
		y: centerY + 4,
	}));
particles.push(
	new Particle({
		x: centerX + 4,
		y: centerY + 4,
	})); */
canvas.add(...particles);

document.body.append(canvas.view);

requestAnimationFrame(tick);

function tick() {
	requestAnimationFrame(tick);
	let s = 0;
	let coordAround = [];

	for (let index = 0; index < particles.length; index++) {
		for (let jindex = 1; jindex < particles.length - 1; jindex++) {
			if ((particles[index].position.x + particles[index].r + 1) - (particles[jindex].position.x + particles[jindex].r) == 0) {
				s++;
				coordAround.push(particles[jindex]);
			}
		}
		if (s < 2 || s > 3) {
			console.log(s)

			particles.splice(index, 1);
		}
		else {
			for (let x = particles[index].position.x - particles[index].r - 1; x < particles[index].position.x + particles[index].r + 1; x++) {
				for (let y = particles[index].position.y - particles[index].r - 1; y < particles[index].position.y + particles[index].r + 1; y++) {
					for (const coord of coordAround) {
						if (x != coord.position.x + particles[index].r && y != coord.position.y + particles[index].r) {
							particles.push(
								new Particle({
									x: x,
									y: y,
								})
							);
							break;
						}
					}
				}
			}

		}
		s = 0;
	}
	//console.log(particles.length);
	canvas.container = particles;

	canvas.clear();

	canvas.draw();
}
