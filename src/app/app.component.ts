import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>footmax</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
