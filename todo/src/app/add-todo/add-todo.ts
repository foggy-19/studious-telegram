import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../shared/models/TodoItem';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  @Output() addTodoEvent = new EventEmitter<TodoItem>();
  newItemText: string = '';

  constructor() {}

  addItem() {
    const todoItem = new TodoItem(this.newItemText, '', false);
    this.addTodoEvent.emit(todoItem);
    this.newItemText = '';
  }
}
