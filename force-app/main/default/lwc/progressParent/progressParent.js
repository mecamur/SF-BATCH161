import { LightningElement } from 'lwc';

export default class ProgressParent extends LightningElement {
    progress;
    size;

    changeHandler(event) {
        if(event.target.name == "Progress") {
            this.progress = event.target.value;
        } else {
            this.size = event.target.value;
        }
    }

    get sizeOptions() {
        return [
            {label: "Small", value: "Small"},
            {label: "Medium", value: "Medium"},
            {label: "Large", value: "Large"}
        ];
    }

    resetHandler() {
        this.template.querySelector("c-progress-bar").resetProgress();
        this.progressSize = "Medium";
        this.progressValue = 50;
    }
}