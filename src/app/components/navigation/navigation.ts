import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

interface NavItem {
  text: string;
  id: string;
}

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  isMenuOpen: boolean = false;

  navItems: NavItem[] = [
    {text: 'About', id: 'about'},
    {text: 'Projects', id: 'projects'},
    { text: 'Skills', id: 'skills' },
    { text: 'Education', id: 'education' },
    { text: 'Certifications', id: 'certifications' },
    { text: 'Contact', id: 'contact' }
  ];

  constructor(private readonly iewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }
}
