import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  private readonly experiences: Experience[] = [
    {
      title: 'Software Engineering Intern (Part-time)',
      company: 'Vinayak IT Solutions',
      location: 'Kolhapur, Maharashtra',
      duration: 'Feb 2026 - May 2026',
      tech: ['Java', 'PostgreSQL', 'Spring Boot', 'Bucket4j', 'ShedLock', 'JUnit 5', 'Mockito', 'JaCoCo'],
      description: [
        'Designed a multi-datasource PostgreSQL setup to isolate audit logs from core banking data, supporting high-reliability data pipelines and reducing query latency on transaction-heavy endpoints.',
        'Prevented database exhaustion on production REST APIs by implementing Bucket4j rate limiting (100 req/min), blocking 100% of DDoS traffic.',
        'Prevented double-charges in a distributed banking environment by eliminating race conditions across concurrent scheduled triggers using Spring Boot 3 and ShedLock.',
        'Cut debugging time by 40% and caught 7 critical pre-deployment bugs by bringing JaCoCo test coverage to 85% via JUnit 5 and Mockito; collaborated with senior engineers on code reviews and technical documentation.'
      ]
    }
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
