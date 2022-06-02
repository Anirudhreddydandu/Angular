import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import {
    ActivatedRoute,
    NavigationEnd, Router
} from '@angular/router'
import { filter, map } from 'rxjs/operators'


@Component({
    selector: 'app',
    templateUrl : './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        public location: Location,
    ) {


        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => {
                    let child = this.activatedRoute.firstChild
                    while (child) {
                        if (child.firstChild) {
                            child = child.firstChild
                        } else if (child.snapshot.data) {
                            return child.snapshot.data
                        } else {
                            return ''
                        }
                    }
                    return ''
                })
            )
            .subscribe((data: any) => {
                if (data) {
                    this.titleService.setTitle(`${data['title']}`)
                }
            })

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit() {

    }

}
