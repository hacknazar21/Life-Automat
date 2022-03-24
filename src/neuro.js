import { Vector } from "./Vector";

export class Neuro {
    constructor() {
        this.input = [];
        this.hide = [];
        this.hideLength = 20;
        this.result = [];
        this.key;
        this.alpha = 0.05;
    }
    update(inputData, isBegin = false, Promotion) {
        this.result = [];
        if (isBegin)
            for (const data of inputData) {
                this.input.push({
                    value: data,
                    weight: this.generateWeight(this.hideLength)
                })
            }
        else {
            inputData.forEach((el, i) => {
                this.input[i].value = el;
                for (let index = 0; index < this.input[i].weight.length; index++) {
                    this.input[i].weight[index] = this.input[i].weight[index] + Math.random() * Promotion;
                }
            });
        }
        this.start(isBegin, Promotion);
    }

    generateWeight(n) {

        const massW = [];
        for (let index = 0; index < n; index++) {
            massW.push(Math.random());
        }
        return massW;
    }
    start(isBegin, Promotion) {
        let masshide = [];
        for (let index = 0; index < this.hideLength; index++) {
            masshide.push(0);
        }
        for (const { value, weight } of this.input) {
            let i = 0;
            for (const w of weight) {
                masshide[i++] += value * w
            }
        }
        for (let index = 0; index < masshide.length; index++) {
            if (isBegin)
                this.hide.push({
                    value: masshide[index],
                    weight: this.generateWeight(4)
                })
            else {
                this.hide[index].value = masshide[index];
                for (let i = 0; i < this.hide[i].weight.length; i++) {
                    this.hide[index].weight[i] = this.hide[index].weight[i] + Math.random() * Promotion;
                }
            }
        }
        this.end();

    }
    end() {
        let massOut = [];
        for (let j = 0; j < 4; j++) {
            massOut.push(0);
        }
        for (const { value, weight } of this.hide) {
            let i = 0;
            for (const w of weight) {
                massOut[i++] += value * w
            }
        }


        for (const numOut of massOut) {
            this.result.push(numOut);
        }
        switch (this.result.indexOf(Math.max.apply(null, this.result))) {
            case 0:
                this.key = "ArrowUp"
                break;
            case 1:
                this.key = "ArrowRight"
                break;
            case 2:
                this.key = "ArrowDown"
                break;
            case 3:
                this.key = "ArrowLeft"
                break;
            default:
                break;
        }
    }
    activation(s) {
        return 1 / (1 + Math.E ** (-this.alpha * s));
    }
}