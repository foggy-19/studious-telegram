import { Component } from '@angular/core';
import { TodoItem } from '../shared/models/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'todo';
  items: TodoItem[] = [];
}
