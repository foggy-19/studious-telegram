import { Component } from '@angular/core';
import { TodoItem } from '../shared/models/todoItem';

@Component({
  selector: 'app-root',
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

  onItemToggle(index: number) {
    console.log(`Toggling item at index ${index}`);
    this.items[index].completed = !this.items[index].completed;
    console.log(`Item at index ${index} is now ${this.items[index].completed ? 'done' : 'not done'}`);
  }
}
