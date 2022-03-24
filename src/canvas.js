import { Snake } from "./Snake";

export class Canvas {
	constructor({ r }) {
		this.view = document.createElement("canvas");
		this.context = this.view.getContext("2d");
		this.padding = 0;
		this.grid = null;
		this.snakesmass = [];
		this.score = [];
		this.deadsnakes = [];
		this.bestscore = 0;
		this.generation = 1;
		for (let index = 0; index < 10; index++) {
			this.snakesmass.push(new Snake({}))
			this.score.push(0);
		}
		this.food = 0;
		this.resize();
		this.width = this.view.width;
		this.height = this.view.height;
		this.bestsnake;
		this.r = r;
		this.viewWidth = this.width - this.padding * 2;
		this.viewHeight = this.height - this.padding * 2;
		window.addEventListener("resize", () => this.resize());
	}
	drawGrid() {
		this.grid = new Array();
		let i = 0;
		for (let x = this.padding; x <= this.viewWidth; x += this.r) {
			this.grid.push(new Array());
			let j = 0;
			for (let y = this.padding; y <= this.viewHeight; y += this.r) {
				this.grid[i][j++] = {
					x: x,
					y: y,
					isLife: false,
					isFood: false,
					isHead: false
				};
			}
			i++;
		}

	}

	snakes(snake, i) {
		const coords = snake.update(this.grid);
		this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y].isLife = false;
		for (const row of this.grid) {
			for (const cell of row) {
				cell.isLife = false;
				cell.isHead = false;
			}
		}
		for (const coord of coords) {
			if (this.grid[coord.x][coord.y].isFood) {
				this.grid[coord.x][coord.y].isFood = false;
				snake.promotion(0.8);
				snake.eat();
				this.score[i]++;
				this.food--;
			}
			this.grid[coord.x][coord.y].isLife = true;

		}
		if (snake.iscol) {
			return -1;
		}

		if (coords[coords.length - 1].x + 1 < this.grid.length && this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].x - 1 >= 0 && this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y - 1 >= 0 && this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y - 1].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y + 1 < this.grid[0].length && this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y + 1].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y + 1 < this.grid[0].length
			&&
			coords[coords.length - 1].x + 1 < this.grid.length
			&& this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y + 1].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y - 1 >= 0
			&&
			coords[coords.length - 1].x - 1 >= 0
			&& this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y - 1].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y + 1 < this.grid[0].length
			&&
			coords[coords.length - 1].x - 1 >= 0
			&& this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y + 1].isFood) {
			snake.promotion(0.02);
		}
		else if (coords[coords.length - 1].y - 1 >= 0
			&&
			coords[coords.length - 1].x + 1 < this.grid.length
			&& this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y - 1].isFood) {
			snake.promotion(0.02);
		}
		else snake.promotion(-0.01);

		this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y].isHead = true;
		for (const row of this.grid) {
			for (const { x, y, isLife, isFood, isHead } of row) {
				this.context.strokeStyle = "grey";
				this.context.strokeRect(x, y, this.r, this.r);
				if (isLife && !isHead) {
					this.context.fillStyle = "green";
					this.context.fillRect(x, y, this.r, this.r);
				}
				else if (isHead) {
					this.context.fillStyle = "blue";
					this.context.fillRect(x, y, this.r, this.r);
				}
				else if (isFood) {
					this.context.fillStyle = "red";
					this.context.fillRect(x, y, this.r, this.r);
				}
			}
		}
	}
	updateGrid() {
		this.context.clearRect(0, 0, this.width, this.height);
		let i = 0;
		for (const snake of this.snakesmass) {
			if (this.deadsnakes.indexOf(snake) != -1) {

			}
			else if (this.snakes(snake, i) == -1) {
				if (this.bestscore < this.score[i]) {
					this.bestscore = this.score[i];
					this.bestsnake = snake;
				}
				this.deadsnakes.push(snake)

				if (this.deadsnakes.length == this.snakesmass.length) return -1;
			}


			i++;
		}

		return 0;
	}
	clearAll() {
		this.context.clearRect(0, 0, this.width, this.height);
		this.grid = null;
		this.snakesmass = [];
		this.score = [];
		this.deadsnakes = [];
		if (this.generation < 20) {
			this.generation++;
			for (let index = 0; index < 10; index++) {
				this.bestsnake.promotion(-1 * Math.random());

				this.snakesmass.push(new Snake({
					xi: index * 2,
					isbegin: false,
					neuro: this.bestsnake.neuro,
					prVal: this.bestsnake.promotionValue
				}));
				this.score.push(0);

			}
		}
		else {
			this.bestsnake.promotion(-5 * Math.random());

			this.snakesmass.push(new Snake({

				isbegin: false,
				neuro: this.bestsnake.neuro,
				prVal: this.bestsnake.promotionValue
			}));
			this.score.push(0);
		}

		this.food = 0;
		this.drawGrid();
	}
	getRandomBetween(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}
	drawFood() {

		for (let index = 0; index < 50; index++) {
			const i = this.getRandomBetween(0, this.grid.length - 1);
			const j = this.getRandomBetween(0, this.grid[0].length - 1);
			if (!this.grid[i][j].isLife) {
				this.grid[i][j].isFood = true;
			}
			this.food++;
		}
	}
	resize() {
		this.view.width = window.innerWidth;
		this.view.height = window.innerHeight;
	}
}
