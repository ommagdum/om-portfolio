import { Component, inject } from '@angular/core';
import { CertificationService } from '../../services/certification-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule, RouterModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {

  private readonly certificationService = inject(CertificationService);
  certifications = this.certificationService.getCertifications();

}
