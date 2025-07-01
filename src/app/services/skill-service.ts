import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill-category';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  private readonly skills: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: ['Java', 'Python', 'SQL']
    },
    {
      name: 'Tools',
      skills: ['Docker', 'Maven', 'Jupyter Notebooks']
    },
    {
      name: 'Web Technologies',
      skills: ['REST APIs', 'JWT', 'OAuth2', 'Microservices']
    },
    {
      name: 'Machine Learning',
      skills: [
        'Supervised Learning', 
        'Unsupervised Learning', 
        'Classification', 
        'Recommender Systems', 
        'Linear Regression'
      ]
    },{
      name: 'Data Science',
      skills: [
        'EDA',
        'Data Cleaning',
        'Preprocessing',
        'Visualization',
        'CRISP-DM'
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        'Spring Boot', 
        'Spring Framework', 
        'Flask', 
        'PostgreSQL', 
        'TensorFlow', 
        'XGBoost', 
        'Pandas', 
        'NumPy'
      ]
    }
  ];

  getSkills(): SkillCategory[] {
    return this.skills;
  }
}
