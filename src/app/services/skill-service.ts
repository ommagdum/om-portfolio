import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill-category';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  private readonly skills: SkillCategory[] = [
    {
      name: 'Languages',
      skills: ['Java (17/21)', 'Python 3.12', 'TypeScript', 'JavaScript (ES6+)', 'SQL']
    },
    {
      name: 'Backend',
      skills: ['Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Apache Kafka']
    },
    {
      name: 'Frontend',
      skills: ['React 18', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
    },
    {
      name: 'Databases & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'AWS']
    },
    {
      name: 'Security & Architecture',
      skills: ['Microservices', 'REST', 'OAuth2', 'OIDC', 'JWT', 'Keycloak', 'WebSockets (STOMP)']
    },
    {
      name: 'DevOps & Testing',
      skills: ['Docker', 'Maven', 'Git', 'JUnit 5', 'Mockito', 'JaCoCo', 'JMeter', 'ShedLock', 'Bucket4j', 'Resilience4j']
    }
  ];

  getSkills(): SkillCategory[] {
    return this.skills;
  }
}
