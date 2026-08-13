import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Event, EventType } from '../../models/Event';
import { EventService } from '../../services/events/EventService';
import { TodoItem } from '../../models/TodoItem';

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
