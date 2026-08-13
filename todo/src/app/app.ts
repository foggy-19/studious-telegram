import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo/models/TodoItem';
import { TodoList } from './todo/presentations/todo-list/todo-list';
import { AddTodo } from './todo/presentations/add-todo/add-todo';
import { FilterTodos, TodoItemFilter } from './todo/presentations/filter-todos/filter-todos';
import { EventType } from './todo/models/Event';
import { EventService } from './todo/services/events/EventService';
import { TodoService } from './todo/services/todo/todo-service';

@Component({
  selector: 'app-root',
  imports: [TodoList, AddTodo, FilterTodos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title: string = 'todo';
  items: TodoItem[] = [];
  filter?: TodoItemFilter;

  constructor(
    private events: EventService,
    private todoService: TodoService,
  ) {
    events.listen<TodoItem>(EventType.RemoveTodo, (todo: TodoItem) => {
      this.removeTodo(todo);
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err: Error) => {
        alert(err.message);
      },
    });
  }

  addTodo(todo: TodoItem) {
    this.todoService.addTodo(todo).subscribe({
      next: (todo: TodoItem) => {
        this.items.push(todo);
      },
      error: (err: Error) => {
        alert(err.message);
      },
    });
  }

  removeTodo(todo: TodoItem) {
    this.todoService.removeTodo(todo.id).subscribe({
      next: () => {
        this.items = this.items.filter((item) => item.id !== todo.id);
      },
      error: (err: Error) => {
        alert(err.message);
      },
    });
  }
}
