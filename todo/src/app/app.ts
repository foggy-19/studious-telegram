import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../shared/models/todoItem';
import { TodoList } from './todo-list/todo-list';
import { AddTodo } from './add-todo/add-todo';
import { FilterTodos, TodoItemFilter } from './filter-todos/filter-todos';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoList, AddTodo, FilterTodos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'todo';
  items: TodoItem[] = [
    new TodoItem('Learn Angular', 'Learn Angular framework for building web applications', false),
    new TodoItem('Learn TypeScript', 'Learn TypeScript programming language', true),
    new TodoItem('Build a Todo App', 'Build a simple todo application using Angular and TypeScript', false),
  ];

  filter?: TodoItemFilter;
}
