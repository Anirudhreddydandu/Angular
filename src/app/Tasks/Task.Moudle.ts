import { NgModule } from "@angular/core";
import { Task1Component } from "./Task1.Component";
import { Task2Component } from "./Task2.Component";
import { Task3component } from "./Task3.Component";

@NgModule({
    declarations:[Task1Component,Task2Component,Task3component],
    exports:[Task1Component,Task2Component,Task3component]
})

export class TasksMoudle{

}