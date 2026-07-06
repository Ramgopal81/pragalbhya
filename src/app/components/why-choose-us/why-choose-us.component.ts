import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {
  readonly features = [
    {
      icon: 'fa-solid fa-chalkboard-user',
      title: 'Experienced Faculty',
      desc: 'Dedicated mentors guide every learner with personalized attention and expertise.'
    },
    {
      icon: 'fa-solid fa-display',
      title: 'Smart Digital Classrooms',
      desc: 'Interactive learning spaces powered by technology to strengthen engagement and understanding.'
    },
    {
      icon: 'fa-solid fa-shield-heart',
      title: 'Safe & Secure Campus',
      desc: 'Round-the-clock care, monitoring, and a protective environment for all students.'
    },
    {
      icon: 'fa-solid fa-futbol',
      title: 'Sports & Physical Education',
      desc: 'Daily wellness activities and competitive sports that build discipline and confidence.'
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'STEM & Robotics Lab',
      desc: 'Hands-on innovation labs that spark creativity, experimentation, and problem-solving.'
    },
    {
      icon: 'fa-solid fa-users-rays',
      title: 'Personality Development',
      desc: 'Leadership, communication, and life skills programs for confident global citizens.'
    }
  ];

  readonly stats = [
    { value: '1500+', label: 'Students' },
    { value: '15+', label: 'Teachers' },
    { value: '10+', label: 'Years of Excellence' },
    { value: '100%', label: 'Board Results' }
  ];
}
