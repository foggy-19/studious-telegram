import { Component } from '@angular/core';
import { TodoItem } from './models/TodoItem';
import { TodoItemFilter } from './presentations/filter-todos/filter-todos';
import { AddTodo } from './presentations/add-todo/add-todo';
import { TodoList } from './presentations/todo-list/todo-list';
import { FilterTodos } from './presentations/filter-todos/filter-todos';
import { TodoService } from './services/todo/TodoService';
import { EventService } from './services/events/EventService';
import { EventType } from './models/Event';

@Component({
  selector: 'app-todo',
  imports: [TodoList, AddTodo, FilterTodos],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  title: string = 'todo';
  items: TodoItem[] = [];
  filter?: TodoItemFilter;

  constructor(
    private todoService: TodoService,
    events: EventService,
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
