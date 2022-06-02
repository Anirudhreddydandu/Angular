import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: "full" },
    {
        path: 'app', component: AppComponent,
        children: [
            { path: 'jokes', loadChildren: () => import('./jokes/joke.module').then(m => m.JokeModule) }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            onSameUrlNavigation: 'reload',
            useHash: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
