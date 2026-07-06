import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EventCard {
  title: string;
  date: string;
  description: string;
  location: string;
  time: string;
  image: string;
}

interface NewsCard {
  title: string;
  date: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  readonly upcomingEvents: EventCard[] = [
    {
      title: 'Annual Sports Day',
      date: '15 Jul',
      description: 'A full-day celebration of sportsmanship, teamwork and student energy.',
      location: 'Main Sports Ground',
      time: '8:30 AM',
      image: 'assets/images/gallery/sports/sport-1.jpg'
    },
    {
      title: 'Science Exhibition',
      date: '22 Jul',
      description: 'Young innovators showcase ideas that connect creativity with scientific discovery.',
      location: 'Innovation Hall',
      time: '10:00 AM',
      image: 'assets/images/gallery/science-lab/science-1.jpg'
    },
    {
      title: 'Independence Day Celebration',
      date: '15 Aug',
      description: 'A vibrant celebration of culture, patriotism and student performances.',
      location: 'Assembly Ground',
      time: '9:00 AM',
      image: 'assets/images/gallery/events/event-1.jpg'
    },
    {
      title: 'Parent Teacher Meeting',
      date: '29 Aug',
      description: 'A collaborative discussion focused on student progress and future goals.',
      location: 'School Auditorium',
      time: '4:00 PM',
      image: 'assets/images/gallery/events/event-2.jpg'
    }
  ];

  readonly latestNews: NewsCard[] = [
    {
      title: 'Admissions Open 2026-27',
      date: '01 Jun',
      description: 'Applications are now open for new admissions across all grades and programs.',
      image: 'assets/images/news/admissions-open.svg'
    },
    {
      title: 'CBSE Board Results',
      date: '10 May',
      description: 'Our students continue to achieve remarkable academic excellence and confidence.',
      image: 'assets/images/news/board-results.svg'
    },
    {
      title: 'Robotics Lab Inauguration',
      date: '18 Apr',
      description: 'A new robotics laboratory is inspiring innovation and hands-on learning.',
      image: 'assets/images/news/robotics-lab.svg'
    },
    {
      title: 'New Digital Library Launch',
      date: '02 Apr',
      description: 'Students can now access curated digital resources in a modern learning space.',
      image: 'assets/images/news/digital-library.svg'
    }
  ];
}
