import { Component, Input } from '@angular/core';
import { TodoItem } from '../../shared/models/todoItem';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: TodoItem[] = [];

  constructor() {}

  toggleItem(item: TodoItem) {
    console.log(`Toggling item: ${item}`);
    item.completed = !item.completed;
  }
}
