import { Component, Input } from '@angular/core';
import { TodoItem } from '../../models/TodoItem';
import { TodoListItem } from '../todo-list-item/todo-list-item';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todos: TodoItem[] = [];

  constructor() {}
}
