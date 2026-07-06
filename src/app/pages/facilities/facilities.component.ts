import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  readonly facilities = [
    {
      image: 'assets/images/smartclass.jpeg',
      icon: 'fa-solid fa-chalkboard',
      title: 'Smart Classrooms',
      description: 'Interactive boards, audio-visual tools, and flexible seating that support modern learning.'
    },
    {
      image: 'assets/images/sciencelab.jpeg',
      icon: 'fa-solid fa-flask',
      title: 'Science Laboratories',
      description: 'Well-equipped labs that make experiments safe, engaging, and inspiring for students.'
    },
    {
      image: 'assets/images/computerlab.jpeg',
      icon: 'fa-solid fa-computer',
      title: 'Computer Lab',
      description: 'A technology-rich space for coding, digital literacy, and innovation-based learning.'
    },
    {
      image: 'assets/images/schoollibrary.jpeg',
      icon: 'fa-solid fa-book-open',
      title: 'Library & Reading Zone',
      description: 'A calm and curated reading environment with books, journals, and digital resources.'
    },
    {
      image: 'assets/images/sportcomplex.jpeg',
      icon: 'fa-solid fa-futbol',
      title: 'Sports Complex',
      description: 'Indoor and outdoor facilities that nurture fitness, teamwork, and competitive spirit.'
    },
    {
      image: 'assets/images/musicevent.jpeg',
      icon: 'fa-solid fa-music',
      title: 'Music & Dance Rooms',
      description: 'Creative spaces where artistic expression and cultural confidence are encouraged.'
    },
    // {
    //   image: 'assets/images/facility-medical.svg',
    //   icon: 'fa-solid fa-kit-medical',
    //   title: 'Medical Room',
    //   description: 'A well-maintained infirmary with first-aid support and student wellness care.'
    // },
    // {
    //   image: 'assets/images/facility-security.svg',
    //   icon: 'fa-solid fa-video',
    //   title: 'CCTV Security System',
    //   description: 'Advanced surveillance and safety systems that ensure a secure campus environment.'
    // }
  ];
}
