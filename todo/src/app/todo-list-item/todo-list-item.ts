import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  imports: [NgClass],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.css',
})
export class TodoListItem {
  @Input() title!: string;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  constructor() {}

  get cssClasses() {
    return { 'strikeout text-muted': this.fullfilled };
  }

  toggle() {
    console.log(`toggle`);
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
