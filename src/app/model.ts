export class User {
    name;
    items;
    constructor(user: string) {
      this.name = user;
      this.items = [
        new TodoItem('Buy Flowers', false),
        new TodoItem('Get Shoes', false),
        new TodoItem('Collect Tickets', false),
        new TodoItem('Call Joe', false),
      ];
    }
  }
  
  export class TodoItem {
    action;
    done;
  
    constructor(action: string, done: boolean) {
      this.action = action;
      this.done = done;
    }
  }