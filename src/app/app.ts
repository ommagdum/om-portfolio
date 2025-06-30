import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/navigation/navigation";

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
  protected title = 'om-portfolio';
}
