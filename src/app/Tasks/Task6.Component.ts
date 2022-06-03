import { Component } from "@angular/core";

@Component({
    selector:"Task6",
    templateUrl:"Task6.html"
})
export class Task6Component{
     numberpatterntrigger() {
        let a = ''
        let x=1;
        for (let i = 0; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                a += x;
                x++;
            }
            a += "\n";
        }
       alert(a);
        
    }

}
