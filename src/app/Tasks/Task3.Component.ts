import { Component } from "@angular/core";

@Component({
    selector: "Task3",
    templateUrl: "Task3.html"
})

export class Task3component {
    btntriger() {
        let a = ''
        let z=a
        for (let i = 0; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                a += i;
              
            }
            a += "\n";
        }

        alert(a);
    }

 }


