import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRootComponent } from './app-root.component'

import { AppComponent } from './app.component'
import { TasksMoudle } from './Tasks/Task.Moudle'


@NgModule({
    declarations: [
        AppRootComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        TasksMoudle
   
    ],
    providers: [],
    bootstrap: [AppRootComponent]
})
export class AppModule { }
