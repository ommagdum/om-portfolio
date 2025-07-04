import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/navigation/navigation";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'Om Magdum | Java Full-Stack';
  constructor(private readonly titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
