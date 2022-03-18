const canvasGrid = new Canvas();

const r = 5;
let numberLife = 0;


const counterDOM = document.querySelector('.counter>span');
canvasGrid.drawGrid();

document.body.insertAdjacentElement('beforeend', canvasGrid.view);
for (let c = 0; c < 1500 * window.innerWidth / window.innerHeight; c++) {
	let i = getRandomBetween(0, canvasGrid.grid.length - 1);
	let j = getRandomBetween(0, canvasGrid.grid[0].length - 1);
	canvasGrid.grid[i][j].isLife = true;
	canvasGrid.updateGrid(canvasGrid.grid[i][j])
}
/* canvasGrid.grid[10][10].isLife = true;
canvasGrid.updateGrid(canvasGrid.grid[10][10])
canvasGrid.grid[10][11].isLife = true;
canvasGrid.updateGrid(canvasGrid.grid[10][11])
canvasGrid.grid[10][12].isLife = true;
canvasGrid.updateGrid(canvasGrid.grid[10][12]) */
start_animate(20);
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


function getRules() {

	let counterLife = 0;
	let forDeath = [];
	let forBirth = [];


	canvasGrid.grid.forEach((gridColumn, indexY) => {
		gridColumn.forEach((gridCell, indexX) => {
			let counterAroundLife = 0;
			if (
				(indexY - 1) > 0
				&& canvasGrid.grid[indexY - 1][indexX].isLife
			) { counterAroundLife++; }
			if (
				(indexY + 1) < canvasGrid.grid.length
				&& canvasGrid.grid[indexY + 1][indexX].isLife
			) { counterAroundLife++; }
			if (
				(indexX - 1) > 0
				&& canvasGrid.grid[indexY][indexX - 1].isLife
			) { counterAroundLife++; }
			if (
				(indexX + 1) < canvasGrid.grid[0].length
				&& canvasGrid.grid[indexY][indexX + 1].isLife
			) { counterAroundLife++; }
			if (
				(indexY - 1) > 0
				&& (indexX - 1) > 0
				&& canvasGrid.grid[indexY - 1][indexX - 1].isLife
			) { counterAroundLife++; }
			if (
				(indexY + 1) < canvasGrid.grid.length
				&& (indexX + 1) < canvasGrid.grid[0].length
				&& canvasGrid.grid[indexY + 1][indexX + 1].isLife
			) { counterAroundLife++; }
			if (
				(indexY - 1) > 0
				&& (indexX + 1) < canvasGrid.grid[0].length
				&& canvasGrid.grid[indexY - 1][indexX + 1].isLife
			) { counterAroundLife++; }
			if (
				(indexY + 1) < canvasGrid.grid.length
				&& (indexX - 1) > 0
				&& canvasGrid.grid[indexY + 1][indexX - 1].isLife
			) { counterAroundLife++; }

			if (gridCell.isLife) {
				counterLife++;
				if (counterAroundLife < 2 || counterAroundLife > 3) forDeath.push(gridCell);
			}
			else { if (counterAroundLife == 3) forBirth.push(gridCell); }
		});
	});
	console.log(forDeath)
	forDeath.forEach(cell => {
		cell.isLife = false;
		canvasGrid.updateGrid(cell);
	});
	forBirth.forEach(cell => {
		cell.isLife = true;
		canvasGrid.updateGrid(cell);

	});


	counterDOM.innerHTML = counterLife;

}