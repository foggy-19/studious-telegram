import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../shared/models/todoItem';

const filters = [(item: TodoItem) => item, (item: TodoItem) => !item.completed, (item: TodoItem) => item.completed];

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'todo';
  items: TodoItem[] = [
    new TodoItem('Learn Angular', 'Learn Angular framework for building web applications', false),
    new TodoItem('Learn TypeScript', 'Learn TypeScript programming language', true),
    new TodoItem('Build a Todo App', 'Build a simple todo application using Angular and TypeScript', false),
  ];
  newItemText: string = '';
  listFilter: number = 0;

  addItem() {
    const item = new TodoItem(this.newItemText, '', false);
    console.log(`Adding new item ${item}`);
    this.items.push(item);
    this.newItemText = '';
  }

  toggleItem(item: TodoItem) {
    console.log(`Toggling item: ${item}`);
    item.completed = !item.completed;
  }

  filterChanged(filter: number) {
    console.log(`filter changed: ${filter}`);
    this.listFilter = filter;
  }

  get visibleItems(): TodoItem[] {
    let value = this.listFilter;
    return this.items.filter(filters[value]);
  }
}
