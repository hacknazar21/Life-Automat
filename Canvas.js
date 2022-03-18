class Canvas {
	constructor() {
		this.view = document.createElement("canvas");
		this.context = this.view.getContext("2d");
		this.padding = 0;

		this.container = [];
		this.grid;
		this.resize();
		this.width = this.view.width;
		this.height = this.view.height;
		this.viewWidth = this.width - this.padding * 2;
		this.viewHeight = this.height - this.padding * 2;
		window.addEventListener("resize", () => this.resize());
	}




	drawGrid() {
		this.grid = new Array();
		let i = 0;
		for (let x = this.padding; x <= this.viewWidth; x += r) {
			this.grid.push(new Array());
			let j = 0;
			for (let y = this.padding; y <= this.viewHeight; y += r) {
				this.grid[i][j++] = {
					x: x,
					y: y,
					isLife: false
				};
			}
			i++;
		}

	}

	updateGrid({ x, y, isLife }) {
		if (isLife) {
			this.context.fillStyle = 'red';
			this.context.fillRect(x, y, r, r);


		}
		else {
			this.context.clearRect(x, y, r, r);

		}
	}




	resize() {
		this.view.width = window.innerWidth;
		this.view.height = window.innerHeight;
	}




}
