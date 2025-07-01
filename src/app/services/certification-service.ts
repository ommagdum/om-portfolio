import { Injectable } from '@angular/core';
import { Certification } from '../models/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor() { }

  private readonly certifications: Certification[] = [{
    title: 'Java Spring Framework 6 with Spring Boot 3',
    provider: 'Telusko / Navin Reddy',
    date: 'Mar 24, 2025',
    url: 'https://www.udemy.com/certificate/UC-d846a318-218c-4b7d-8bee-7e0fbcb08073/',
    icon: 'award'
  }, {
    title: 'MLOps Specialization',
    provider: 'Duke University',
    date: 'Dec 31, 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/JYW4CQVYUF3L',
    icon: 'award'
  }, {
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Stanford University',
    date: 'Oct 6, 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/UE5JX60KR7UQ',
    icon: 'award'
  }, {
    title: 'IBM Data Science Professional Certificate',
    provider: 'IBM',
    date: 'Jun 23, 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/4CV94QJP3CPW',
    icon: 'award'
  }];

  getCertifications(): Certification[] {
    return this.certifications;
  }
}
