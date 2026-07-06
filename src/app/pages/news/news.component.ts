import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  readonly newsItems: NewsItem[] = [
    {
      title: 'Admissions Open 2026-27',
      date: '01 Jun 2026',
      description: 'Applications are now open across all grades, with scholarships and campus tours available.',
      image: 'assets/images/gallery/classrooms/classroom-1.jpg',
      category: 'Admissions'
    },
    {
      title: 'CBSE Board Results Celebrated',
      date: '10 May 2026',
      description: 'Our students achieved strong academic results and shared inspiring success stories.',
      image: 'assets/images/gallery/library/library-1.jpg',
      category: 'Academics'
    },
    {
      title: 'Robotics Lab & Computer Lab Innovation',
      date: '18 Apr 2026',
      description: 'State-of-the-art computer and robotics labs were unveiled to strengthen hands-on innovation and STEM learning.',
      image: 'assets/images/gallery/computer-lab/computer-1.jpg',
      category: 'Innovation'
    },
    {
      title: 'Science Exhibition - Student Innovations',
      date: '02 Apr 2026',
      description: 'Students showcased brilliant projects combining creativity with scientific discovery in our annual science exhibition.',
      image: 'assets/images/gallery/science-lab/science-1.jpg',
      category: 'Learning'
    }
  ];
}
