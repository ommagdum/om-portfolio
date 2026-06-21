import { Injectable } from '@angular/core';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private readonly projects: Project[] = [
    {
      title: 'MeetingMinutes AI | Mega Project',
      tech: ['Spring Boot', 'React', 'Flask', 'MongoDB', 'Whisper', 'Mistral 7B', 'Docker'],
      duration: 'July 2025 - June 2026',
      description: [
        'Built a containerized, cloud-ready Spring Boot + React + Flask microservices platform with MongoDB-backed persistence, handling 50 concurrent users at <200ms API response times.',
        'Integrated AI transcription pipeline (Whisper + Mistral 7B) via async, event-driven inter-service APIs, processing 60-minute audio in <7 minutes.'
      ],
      repository: 'https://github.com/ommagdum/academic-meeting-minutes',
      liveDemo: ''
    },
    {
      title: 'Event Ticket Platform',
      tech: ['Keycloak', 'OAuth2', 'OIDC', 'PostgreSQL', 'Docker'],
      duration: 'Nov 2025 - Dec 2025',
      description: [
        'Secured user flows with Keycloak (OAuth2/OIDC) and custom Servlet Filters syncing identities to PostgreSQL, mirroring enterprise-grade customer identity management patterns.',
        'Dockerized the backend, Keycloak, and Adminer via Compose for consistent, reproducible environments across deployments.'
      ],
      repository: 'https://github.com/ommagdum/tickets',
      liveDemo: ''
    },
    {
      title: 'ML-Based Spam Email Detection Web App',
      tech: ['Spring Boot', 'Flask', 'Python', 'TF-IDF', 'Naive Bayes'],
      duration: 'Jan 2025 - May 2025',
      description: [
        'Architected a distributed full-stack application bridging a Spring Boot backend with a Python Flask service via asynchronous inter-service APIs to classify incoming email payloads.',
        'Deployed a TF-IDF + Naive Bayes model with live retraining, versioning, and rollback via dedicated REST endpoints.'
      ],
      repository: 'https://github.com/ommagdum/intelligent-spam-detection',
      liveDemo: ''
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectByTitle(title: string): Project | undefined {
    return this.projects.find(project => project.title === title);
  }
}
