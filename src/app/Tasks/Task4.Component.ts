import { Component } from "@angular/core";

@Component({
    selector:"Task4",
    templateUrl:"Task4.html"
})

export class Task4Componenet{
 numberseries(){
        let a = ''
        let x=1;
        for (let i = 0; i <= 4; i++) {
            for (let j = 1; j <= i; j++) {
                a += x;
                x++;
            }
            a += "\n";
        }
       alert(a);
    }

}