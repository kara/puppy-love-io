import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DogsComponent } from './+dogs';

@Component({
  moduleId: module.id,
  selector: 'puppy-love-io-app',
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidenav>
        <md-nav-list *shellNoRender>
          <a md-list-item *ngFor="let view of views">
            <md-icon md-list-icon>{{view.icon}}</md-icon>
            <span md-line>{{view.name}}</span>
            <span md-line>{{view.description}}</span>
          </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar color="primary">
        <button md-icon-button (click)="sidenav.open()">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </button>
        Puppy Love
      </md-toolbar>
      <router-outlet *shellNoRender></router-outlet>
    </md-sidenav-layout>
  `,
  styles: [`
    md-sidenav-layout {
      background: rgba(0,0,0,0.08);
    }

  `],
  directives: [
    APP_SHELL_DIRECTIVES,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS, MdIconRegistry],
})
@RouteConfig([
  {path: '/dogs', component: DogsComponent, useAsDefault: true}
])
export class PuppyLoveIoAppComponent {
  title = 'puppy-love-io works!';
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment_ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];
}
