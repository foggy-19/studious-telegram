import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/TodoItem';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  @Output() addTodoEvent = new EventEmitter<TodoItem>();
  title: string = '';

  constructor() {}

  addTodoItem() {
    this.addTodoEvent.emit(new TodoItem(this.generateUuid(), this.title, '', false));
    this.title = '';
  }

  private generateUuid(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }

    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}
