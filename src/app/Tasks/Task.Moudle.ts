import { NgModule } from "@angular/core";
import { Task1Component } from "./Task1.Component";
import { Task2Component } from "./Task2.Component";
import { Task3component } from "./Task3.Component";
import { Task4Componenet } from "./Task4.Component";
import { Task5Component } from "./Task5.Component";
import { Task6Component } from "./Task6.Component";
import { Task7Component } from "./Task7.Component";

@NgModule({
    declarations:[Task1Component,Task2Component,Task3component,Task4Componenet,Task5Component,Task6Component,Task7Component],
    exports:[Task1Component,Task2Component,Task3component,Task4Componenet,Task5Component,Task6Component,Task7Component]
})

export class TasksMoudle{

}