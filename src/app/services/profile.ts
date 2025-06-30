import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly profileData: Profile = {
    name: 'Om Magdum',
    location: 'Kolhapur, Maharashtra',
    email: 'magdumom.ml@gmail.com',
    phone: '+91-7249797177',
    summary: 'Full-stack developer & ML engineer building scalable web applications and ML pipelines.',
    linkedin: 'https://www.linkedin.com/in/om-ml-engg/',
    github: 'https://github.com/ommagdum'
  }

  constructor() { }

  getProfile(): Profile {
    return this.profileData;
  }
}
