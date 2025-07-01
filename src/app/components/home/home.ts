import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../hero/hero';
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";
import { Education } from "../education/education";
import { Certifications } from "../certifications/certifications";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Hero, Projects, Skills, Education, Certifications, Contact, Footer],
  template: `
    <app-hero></app-hero>
    <app-projects></app-projects>
    <app-skills></app-skills>
    <app-education></app-education>
    <app-certifications></app-certifications>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styles: []
})
export class Home {
}
