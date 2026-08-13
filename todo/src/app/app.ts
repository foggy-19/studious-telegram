import { Component } from '@angular/core';
import { Todo } from './todo/todo';
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [Todo, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'todo';
}
