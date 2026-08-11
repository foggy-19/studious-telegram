import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../shared/models/todoItem';

export type TodoItemFilter = (item: TodoItem) => boolean;

const filters: TodoItemFilter[] = [(item: TodoItem) => true, (item: TodoItem) => !item.completed, (item: TodoItem) => item.completed];

@Component({
  selector: 'app-filter-todos',
  imports: [FormsModule],
  templateUrl: './filter-todos.html',
  styleUrl: './filter-todos.css',
})
export class FilterTodos implements OnInit {
  filter: number = 0;
  @Output() changeFilterEvent = new EventEmitter<TodoItemFilter>();

  constructor() {}

  ngOnInit(): void {
    this.changeFilter(this.filter);
  }

  changeFilter(value: number) {
    console.log(`change filter: ${value}`);
    this.changeFilterEvent.emit(filters[value]);
  }
}
