import { Neuro } from "./neuro";

export class Snake {
    constructor(params) {
        this.coordsHead = { x: params.xi || 13, y: params.yi || 20 };
        this.coordsBody = [];
        this.coordsTale = { x: params.xi - 1 || 11, y: params.yi || 20 };
        this.coords = [this.coordsTale, ...this.coordsBody, this.coordsHead];

        this.xmax;
        this.ymax;
        this.iscol = false;
        this.isbegin = params.isbegin || true;
        this.promotionValue = params.prVal || 0;
        this.neuroData = [];
        this.neuro = params.neuro || new Neuro();
    }

    update(grid) {
        this.xmax = grid.length - 1;
        this.ymax = grid[0].length - 1;
        this.neuroData = [];
        for (const column of grid) {
            for (const { x, y, isLife, isFood, isHead } of column) {
                this.neuroData.push(x);
                this.neuroData.push(y);
            }
        }
        this.neuro.update(this.neuroData, this.isbegin, this.promotionValue);
        this.move(this.neuro.key);
        this.isbegin = false;
        return this.coords;
    }
    promotion(prom) {
        this.promotionValue = prom;
    }
    move(code) {
        if (code == 'ArrowRight' || code == 'KeyD') {
            this.iscol = this.iscollade(this.coordsHead.x + 1, this.coordsHead.y);
            this.loopsnake();
            if (this.coordsHead.x + 1 > this.xmax) this.coordsHead.x = 0;
            else this.coordsHead.x++;
        }
        else if (code == 'ArrowLeft' || code == 'KeyA') {
            this.iscol = this.iscollade(this.coordsHead.x - 1, this.coordsHead.y);
            this.loopsnake();
            if (this.coordsHead.x - 1 < 0) this.coordsHead.x = this.xmax;
            else this.coordsHead.x--;
        }
        else if (code == 'ArrowUp' || code == 'KeyW') {
            this.iscol = this.iscollade(this.coordsHead.x, this.coordsHead.y - 1);
            this.loopsnake();
            if (this.coordsHead.y - 1 < 0) this.coordsHead.y = this.ymax;
            else this.coordsHead.y--;
        }
        else if (code == 'ArrowDown' || code == 'KeyS') {
            this.iscol = this.iscollade(this.coordsHead.x, this.coordsHead.y + 1);
            this.loopsnake();
            if (this.coordsHead.y + 1 > this.ymax) this.coordsHead.y = 0;
            else this.coordsHead.y++;
        }
    }

    loopsnake() {
        for (let index = 0; index < this.coords.length - 1; index++) {
            this.coords[index] = { x: this.coords[index + 1].x, y: this.coords[index + 1].y };
        }
    }
    iscollade(coordX, coordY) {
        const elc = { x: coordX, y: coordY };
        for (const el of this.coords) {
            if (el.x == elc.x && el.y == elc.y) {
                return true;
            }
        }
        return false;
    }
    eat() {
        this.coords.splice(1, 0, { x: this.coords[0].x, y: this.coords[0].y });
        this.coordsTale = { x: this.coords[0].x - 1, y: this.coords[0].y };
    }
}