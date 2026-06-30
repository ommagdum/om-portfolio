import { Injectable } from '@angular/core';
import { Certification } from '../models/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor() { }

  private readonly certifications: Certification[] = [{
    title: 'Master Microservices with SpringBoot,Docker,Kubernetes',
    provider: 'Udemy',
    date: 'Jul 2026',
    url: 'https://www.udemy.com/certificate/UC-78717f5a-0ac1-444b-a502-cbc184868028/',
    icon: 'award'
  }, {
    title: 'AWS Academy Graduate — Cloud Foundations',
    provider: 'Amazon Web Services',
    date: 'Nov 2025',
    url: 'https://www.credly.com/badges/6537fbfe-992b-4708-b442-c3e197cf2af0/public_url',
    icon: 'award'
  }, {
    title: 'Java Spring Framework 6 with Spring Boot 3',
    provider: 'Udemy',
    date: 'Mar 2025',
    url: 'https://www.udemy.com/certificate/UC-d846a318-218c-4b7d-8bee-7e0fbcb08073/',
    icon: 'award'
  }];

  getCertifications(): Certification[] {
    return this.certifications;
  }
}
