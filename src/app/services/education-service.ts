import { Injectable } from '@angular/core';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }
  private readonly education: Education[] = [{
    degree: 'Bachelor of Technology - BTech',
    field: 'Computer Science',
    institution: 'Tatyasaheb Kore Institute of Engineering & Technology',
    location: 'Warananagar, Maharashtra',
    duration: 'Oct 2022 - May 2026',
    icon: 'graduation-cap'
  }];

  getEducation(): Education[] {
    return this.education;
  }
}
