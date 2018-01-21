import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
        <nav class="navbar is-fixed-top is-light">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <strong>AngularRouterExperiment</strong>
                </div>
                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" routerLink="/"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">Home</a>

                    <a class="navbar-item" routerLink="/another"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">Another</a>

                    <a class="navbar-item" routerLink="/heroes"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">Heroes</a>

                    <a class="navbar-item" routerLink="/heroes/123"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">HeroDetails</a>

                    <a class="navbar-item" routerLink="/notes"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">Notes</a>

                    <a class="navbar-item" routerLink="/notes/123"
                       routerLinkActive="is-active"
                       [routerLinkActiveOptions]="{exact:true}">NoteDetails</a>

                    <div class="navbar-item">
                        <button class="button" (click)="goToHeroDetails()">Go to hero details</button>
                    </div>

                    <router-outlet name="nav"></router-outlet>
                </div>
            </div>
        </nav>

        <div class="container is-fluid">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: []
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.events
            .subscribe(e=> {
                if(e instanceof NavigationStart) {
                    const navigationStartEvent = <NavigationStart>e;
                    console.log(`NavigationStart: url=${navigationStartEvent.url}`);
                } else if(e instanceof NavigationEnd) {
                    const navigationEndEvent = <NavigationEnd>e;
                    console.log(`NavigationEnd: url=${navigationEndEvent.url}, urlAfterRedirects=${navigationEndEvent.urlAfterRedirects}`);
                }
            });
    }

    async goToHeroDetails() {
        await this.router.navigate(['/heroes', 222]);
    }
}
