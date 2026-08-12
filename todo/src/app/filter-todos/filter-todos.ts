import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../shared/models/TodoItem';

export type TodoItemFilter = (item: TodoItem) => boolean;

const filters: TodoItemFilter[] = [
  (_: TodoItem) => true,
  (item: TodoItem) => !item.completed,
  (item: TodoItem) => item.completed,
];

@Component({
  selector: 'app-filter-todos',
  imports: [FormsModule],
  templateUrl: './filter-todos.html',
  styleUrl: './filter-todos.css',
})
export class FilterTodos implements OnInit {
  protected value: number = 0;

  @Input() filter?: TodoItemFilter;
  @Output() filterChange = new EventEmitter<TodoItemFilter>();

  constructor() {}

  ngOnInit(): void {
    this.update(0);
  }

  update(value: number) {
    this.value = value;
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
