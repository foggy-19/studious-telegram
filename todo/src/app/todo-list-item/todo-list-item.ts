import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.css',
})
export class TodoListItem {
  @Input() title!: string;
  @Input() fulfiled!: boolean;
  @Output() fulfiledChange = new EventEmitter<boolean>();

  constructor() {}

  toggle() {
    console.log(`toggle`);
    this.fulfiled = !this.fulfiled;
    this.fulfiledChange.emit(this.fulfiled);
  }
}
