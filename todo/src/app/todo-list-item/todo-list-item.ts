import { Component, Input, Output, EventEmitter, inject, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Event, EventType } from '../../shared/models/Event';
import { EventService } from '../../shared/services/EventService';
import { TodoItem } from '../../shared/models/TodoItem';

@Component({
  selector: 'app-todo-list-item',
  imports: [NgClass],
  templateUrl: './todo-list-item.html',
  styleUrl: './todo-list-item.css',
})
export class TodoListItem {
  @Input() item!: TodoItem;

  constructor(private events: EventService) {}

  get cssClasses() {
    return { 'strikeout text-muted': this.item.completed };
  }

  toggle() {
    this.item.completed = !this.item.completed;
  }

  remove() {
    this.events.emit(new Event(EventType.RemoveTodo, this.item));
  }
}
