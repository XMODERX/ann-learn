import { Component } from '@angular/core';
import { User, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  user = new User('Moder');

  getName() {
    return this.user.name;
  }

  getTodoItems() {
    return this.user.items.filter((item) => !item.done);
  }
  addItem(newItem: string) {
    if (newItem != '') {
      this.user.items.push(new TodoItem(newItem, false));
    }
  }
}
