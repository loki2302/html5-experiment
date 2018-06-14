import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {AnimationsPageComponent} from './animations-page.component';
import {DEMO_PAGE, DemoPage} from '../demo-page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AnimationsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: 'animations', component: AnimationsPageComponent }
    ])
  ],
  providers: [
    {
      provide: DEMO_PAGE,
      multi: true,
      useValue: <DemoPage>{
        title: 'Animations',
        routerLink: 'animations'
      }
    }
  ]
})
export class AnimationsModule { }
