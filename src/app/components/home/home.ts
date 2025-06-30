import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Hero],
  template: `
    <app-hero></app-hero>
  `,
  styles: []
})
export class Home {
}
