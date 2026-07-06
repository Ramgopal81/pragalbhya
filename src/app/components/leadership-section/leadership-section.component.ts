import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface LeadershipProfile {
  photo: string;
  name: string;
  designation: string;
  message: string;
  buttonLabel: string;
  signatureLabel: string;
  accentClass: string;
}

@Component({
  selector: 'app-leadership-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership-section.component.html',
  styleUrls: ['./leadership-section.component.css']
})
export class LeadershipSectionComponent implements AfterViewInit {
  @ViewChildren('revealItem', { read: ElementRef }) revealItems!: QueryList<ElementRef<HTMLElement>>;

  readonly sectionTitle = 'Meet Our Leadership';
  readonly subtitle = 'Dedicated leaders committed to academic excellence and holistic development.';

  readonly profiles: LeadershipProfile[] = [
    {
      photo: 'assets/images/gallery/principle/principal.jpeg',
      name: 'Mrs. Kiran Upadhyay',
      designation: 'Principal',
      message:
        'At New Pragalbhya Public School, we believe every child possesses unique potential. Our mission is to provide a safe, inspiring, and innovative learning environment where students develop academic excellence, confidence, leadership qualities, and strong moral values. Together with our dedicated teachers and supportive parents, we prepare our students to become responsible citizens and lifelong learners.',
      buttonLabel: 'Read Full Message',
      signatureLabel: 'Principal Signature',
      accentClass: 'accent-blue'
    },
    {
      photo: 'assets/images/gallery/principle/ceo.jpeg',
      name: 'Dr. Vatsal Upadhyay',
      designation: 'Chief Executive Officer (CEO)',
      message:
        'Our vision is to build an institution that combines modern education with strong values and character. Through advanced learning methods, experienced faculty, technology-enabled classrooms, and holistic development, New Pragalbhya Public School aims to empower every student to succeed in a rapidly changing world.',
      buttonLabel: 'Learn More',
      signatureLabel: 'CEO Signature',
      accentClass: 'accent-gold'
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
