import { Component } from "@angular/core";

@Component({
    selector: "Task7",
    templateUrl: "Task7.html"
})
export class Task7Component {
    starspatterntrigger() {
        let n = 5;
        let string = "";
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                string += "*";
            }
            string += "\n";
        }
        
        alert(string);
    }
}