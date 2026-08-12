import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../shared/models/TodoItem';
import { EventType } from '../shared/models/Event';
import { TodoList } from './todo-list/todo-list';
import { AddTodo } from './add-todo/add-todo';
import { FilterTodos, TodoItemFilter } from './filter-todos/filter-todos';
import { EventService } from '../shared/services/EventService';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoList, AddTodo, FilterTodos],
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
