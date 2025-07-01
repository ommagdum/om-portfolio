import { Injectable } from '@angular/core';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private readonly projects: Project[] = [
    {
      title: 'ML-Based Spam Email Detection Web App',
      tech: ['Spring Boot', 'React', 'Python', 'PostgreSQL', 'JWT', 'OAuth2', 'Tailwind CSS', 'Flask', 'Naive Bayes', 'TF-IDF'],
      duration: 'Jan 2025 - May 2025',
      description: 'Built a full-stack microservices application for real-time spam email detection with feedback-based model retraining and versioning.',
      repository: 'https://github.com/ommagdum/intelligent-spam-detection'
    },
    {
      title: 'Loan Default Prediction',
      tech: ['Python', 'Jupyter', 'XGBoost'],
      duration: 'Jun 2024 - Jul 2024',
      description: 'Developed an XGBoost model to predict loan defaults with a 0.7595 ROC score using preprocessing, tuning, and evaluation.',
      repository: 'https://github.com/ommagdum/Loan-Default-Prediction'
    },
    {
      title: 'SpaceX Falcon 9 Landing Prediction',
      tech: ['Python', 'Jupyter', 'XGBoost'],
      duration: 'Jun 2024',
      description: 'Created ML models to predict SpaceX Falcon 9 landing outcomes to support startup bidding strategies.',
      repository: 'https://github.com/ommagdum/Loan-Default-Prediction'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectByTitle(title: string): Project | undefined {
    return this.projects.find(project => project.title === title);
  }
}
