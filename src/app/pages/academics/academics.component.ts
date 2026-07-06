import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {
  readonly programs = [
    {
      image: 'assets/images/program-pre-primary.svg',
      icon: 'fa-solid fa-child',
      title: 'Pre-Primary',
      age: 'Age: 2–5 Years',
      description: 'Colorful learning, play-based education, and joyful discovery for young minds.'
    },
    {
      image: 'assets/images/program-primary.svg',
      icon: 'fa-solid fa-book-open',
      title: 'Primary School',
      age: 'Classes I–V',
      description: 'A strong academic foundation built through creativity, literacy, and curiosity.'
    },
    {
      image: 'assets/images/program-middle.svg',
      icon: 'fa-solid fa-lightbulb',
      title: 'Middle School',
      age: 'Classes VI–VIII',
      description: 'Practical and activity-based learning that encourages inquiry and growth.'
    },
    {
      image: 'assets/images/program-secondary.svg',
      icon: 'fa-solid fa-graduation-cap',
      title: 'Secondary School',
      age: 'Classes IX–X',
      description: 'CBSE curriculum with modern teaching methodologies and focused academic support.'
    },
    
    {
      image: 'assets/images/program-skill.svg',
      icon: 'fa-solid fa-robot',
      title: 'Skill Development',
      age: 'Coding • Robotics • AI',
      description: 'Essential 21st-century skills such as communication, coding, and leadership.'
    }
  ];
}
