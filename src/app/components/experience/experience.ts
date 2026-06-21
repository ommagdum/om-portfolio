import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience-service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  private readonly experienceService = inject(ExperienceService);
  experiences = this.experienceService.getExperiences();
}
