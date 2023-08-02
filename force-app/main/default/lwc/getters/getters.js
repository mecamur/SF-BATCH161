import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {
    fruits = ["Apple", "Banana", "Orange", "Dragon"];
    num1 = 10;
    num2 = 20;

    get firstFruit() {
        return this.fruits[0];
    }

    get sum() {
        return this.num1 + this.num2;
    }
}