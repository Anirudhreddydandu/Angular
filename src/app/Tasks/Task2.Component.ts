import { Component } from "@angular/core";

@Component({
    selector:'Task2',
    templateUrl:'Task2.html'
})
export class Task2Component{
     formnumbergreater(formnum1:number,formnum2:number,formnum3:number) {
         if(formnum1>formnum2 && formnum1>formnum3){
             alert("Increasing  order");
         }
         else if(formnum1<formnum2 && formnum1<formnum3){
             alert("decreasing Order");
         }
         else{
             alert("given pattern is invalid");
         }
        
    }
}