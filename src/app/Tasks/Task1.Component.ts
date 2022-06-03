import { Component } from "@angular/core";

@Component({
    selector:'Task1',
    templateUrl:'Task1.html'
})

export class Task1Component{
     numberformsubmition(num1:number,num2:number,num3:number) {
         if(num1===num2 && num1===num3 ){
             alert("All number are equal");
         }
         else if(num1!=num2 && num1!=num3){
             alert("ALL number are not equal ")
         }
         else{
             alert("neither all number are equal are diffrent")
         }
        
    }
}