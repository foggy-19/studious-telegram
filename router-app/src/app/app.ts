import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('router-app');

  constructor(private router: Router) {}

  goToZero() {
    console.log('goto zero');
    this.router.navigate(['zero']);
  }
}
