import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
  selector: 'app-events-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-news.component.html',
  styleUrl: './events-news.component.css'
})
export class EventsNewsComponent implements AfterViewInit {
  @ViewChildren('revealItem', { read: ElementRef }) revealItems!: QueryList<ElementRef<HTMLElement>>;

  readonly upcomingEvents: EventCard[] = [
    {
      title: 'Annual Sports Day',
      date: '15 Jul',
      description: 'A full-day celebration of sportsmanship, teamwork, and student energy.',
      location: 'Main Sports Ground',
      time: '8:30 AM',
      image: 'assets/images/gallery/sports/sport-1.jpg'
    },
    {
      title: 'Science Exhibition',
      date: '22 Jul',
      description: 'Young innovators showcase projects that combine creativity and scientific inquiry.',
      location: 'Innovation Hall',
      time: '10:00 AM',
      image: 'assets/images/gallery/science-lab/science-1.jpg'
    },
    {
      title: 'Independence Day Celebration',
      date: '15 Aug',
      description: 'A vibrant assembly of culture, patriotism, and student performances.',
      location: 'Assembly Ground',
      time: '9:00 AM',
      image: 'assets/images/gallery/events/event-1.jpg'
    },
    {
      title: 'Parent Teacher Meeting',
      date: '29 Aug',
      description: 'A collaborative session for sharing student progress and future goals.',
      location: 'School Auditorium',
      time: '4:00 PM',
      image: 'assets/images/gallery/events/event-2.jpg'
    }
  ];

  readonly latestNews: NewsCard[] = [
    {
      title: 'Admissions Open 2026-27',
      date: '01 Jun',
      description: 'Applications are now open across all grades with scholarships and campus tours available.',
      image: 'assets/images/gallery/classrooms/classroom-1.jpg'
    },
    {
      title: 'CBSE Board Results Celebrated',
      date: '10 May',
      description: 'Our students continue to show remarkable academic excellence and inspiring success stories.',
      image: 'assets/images/gallery/library/library-1.jpg'
    },
    {
      title: 'Computer Lab & Innovation Hub',
      date: '18 Apr',
      description: 'State-of-the-art computer and robotics labs bring hands-on innovation to our STEM culture.',
      image: 'assets/images/gallery/computer-lab/computer-1.jpg'
    },
    {
      title: 'Science Exhibition Success',
      date: '02 Apr',
      description: 'Students showcased brilliant projects combining creativity with scientific discovery and innovation.',
      image: 'assets/images/gallery/science-lab/science-1.jpg'
    }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.revealItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
