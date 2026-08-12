import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../shared/models/TodoItem';
import { EventType } from '../shared/models/Event';
import { TodoList } from './todo-list/todo-list';
import { AddTodo } from './add-todo/add-todo';
import { FilterTodos, TodoItemFilter } from './filter-todos/filter-todos';
import events from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoList, AddTodo, FilterTodos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'todo';
  items: TodoItem[] = [
    new TodoItem('0', 'Learn Angular', 'Learn Angular framework for building web applications', false),
    new TodoItem('1', 'Learn TypeScript', 'Learn TypeScript programming language', true),
    new TodoItem('2', 'Build a Todo App', 'Build a simple todo application using Angular and TypeScript', false),
  ];

  filter?: TodoItemFilter;

  constructor() {
    events.listen<TodoItem>(EventType.RemoveTodo, (todo: TodoItem) => {
      this.removeTodo(todo);
    });
  }

  addTodo(todo: TodoItem) {
    this.items.push(todo);
  }

  removeTodo(todo: TodoItem) {
    this.items = this.items.filter(item => item.id !== todo.id);
  }
}
