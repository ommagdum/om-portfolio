import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  imports: [CommonModule, RouterModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  private readonly educationService = inject(EducationService);
  education = this.educationService.getEducation();
}
