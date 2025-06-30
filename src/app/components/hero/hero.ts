import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  profile: Profile | undefined;

  constructor(private readonly profileService: ProfileService){}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }
}
