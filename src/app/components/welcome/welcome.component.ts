import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  readonly features = [
    { icon: 'fa-solid fa-chalkboard-user', title: 'Experienced Faculty', text: 'Expert mentors who inspire curiosity and confidence.' },
    { icon: 'fa-solid fa-display', title: 'Smart Classrooms', text: 'Interactive digital learning spaces for modern education.' },
    { icon: 'fa-solid fa-shield-heart', title: 'Safe Campus', text: 'A secure, caring environment for every child.' },
    { icon: 'fa-solid fa-seedling', title: 'Holistic Development', text: 'Balanced growth through academics, sports, and arts.' }
  ];
}
