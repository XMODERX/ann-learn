import { Component } from '@angular/core';
import { User } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  user = new User('Moder');

  getName() {
    return this.user.name;
  }
}
