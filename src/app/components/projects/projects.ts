import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  private readonly projectService = inject(ProjectService);

  projects = this.projectService.getProjects();

  showMoreTech(tech: string[], maxItems: number): boolean {
    return tech.length > maxItems;
  }

  getAdditionalTechCount(tech: string[], maxItems: number): number {
    return tech.length - maxItems;
  }

}
