import { Component, inject } from '@angular/core';
import { SkillService } from '../../services/skill-service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  private readonly skillService = inject(SkillService);
  skills = this.skillService.getSkills();
}
