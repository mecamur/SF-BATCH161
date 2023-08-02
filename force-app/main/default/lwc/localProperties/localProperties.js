import { LightningElement } from 'lwc';

export default class LocalProperties extends LightningElement {
    name;
    fullName = "Balakrishna";
    age = 30;
    isComplete = true;
    location = {
        city: "Houston",
        country: "United States"
    };
    fruits = ["Banana", "Grape", "Apple", "Dragon"];
}