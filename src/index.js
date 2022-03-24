const { Canvas } = require("./canvas");

let canvasGrid = new Canvas({ r: 20 });

let numberLife = 0;


const counterDOM = document.querySelector('.counter>span');
const generationDOM = document.querySelector('.generation>span');
canvasGrid.drawGrid();

document.body.insertAdjacentElement('beforeend', canvasGrid.view);

start_animate(0);
function start_animate(duration) {
	var requestID;
	var startTime = null;
	var animate = function (time) {
		time = new Date().getTime(); //millisecond-timstamp
		if (startTime === null) {
			startTime = time;
		}
		var progress = time - startTime;

		startTime++;

		if (progress > duration) {
			getRules();

			requestID = requestAnimationFrame(animate);
			startTime = null;

		}
		else {
			cancelAnimationFrame(requestID);
		}
		requestID = requestAnimationFrame(animate);
	}



	animate();
}
function getRules(time) {

	if (canvasGrid.food == 0)
		canvasGrid.drawFood();
	counterDOM.innerHTML = canvasGrid.score;
	generationDOM.innerHTML = canvasGrid.generation;
	const ret = canvasGrid.updateGrid();
	if (ret == -1) {
		canvasGrid.clearAll();
	}

}