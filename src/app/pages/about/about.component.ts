import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  readonly features = [
    { icon: 'fa-solid fa-brain', label: 'Smart Learning' },
    { icon: 'fa-solid fa-chalkboard-user', label: 'Experienced Teachers' },
    { icon: 'fa-solid fa-shield-heart', label: 'Safe Campus' },
    { icon: 'fa-solid fa-building-columns', label: 'Modern Infrastructure' }
  ];

  readonly highlights = [
    { title: 'CBSE Curriculum', text: 'A balanced and rigorous academic framework tailored for modern learners.' },
    { title: 'Digital Classrooms', text: 'Technology-enhanced instruction that makes learning interactive and engaging.' },
    { title: 'Robotics Lab', text: 'Hands-on innovation spaces that build logic, design, and creativity.' },
    { title: 'Co-Curricular Activities', text: 'Music, arts, sports, and clubs that nurture confident, expressive students.' }
  ];
}
