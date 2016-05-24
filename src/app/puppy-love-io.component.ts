import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

@Component({
  moduleId: module.id,
  selector: 'puppy-love-io-app',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: [],
  directives: [APP_SHELL_DIRECTIVES]
})
export class PuppyLoveIoAppComponent {
  title = 'puppy-love-io works!';
}
