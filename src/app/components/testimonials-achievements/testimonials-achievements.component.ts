import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-testimonials-achievements',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './testimonials-achievements.component.html',
  styleUrl: './testimonials-achievements.component.css'
})
export class TestimonialsAchievementsComponent implements AfterViewInit {
  @ViewChildren('revealItem', { read: ElementRef }) revealItems!: QueryList<ElementRef<HTMLElement>>;

  readonly testimonials: Testimonial[] = [
    {
      name: 'Aarav Sharma',
      role: 'Student',
      quote: 'The school gives me the confidence to explore new ideas every day. The teachers truly nurture curiosity and excellence.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad1%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%231e88e5;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%231565c0;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad1)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3EAS%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Meera Kapoor',
      role: 'Parent',
      quote: 'We love the care, academic focus, and values-driven environment. Our child has grown in every way.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad2%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23f6b93b;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23f39c12;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad2)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3EMK%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Riya Verma',
      role: 'Alumni',
      quote: 'The learning experience here shaped my confidence and leadership. I still carry those lessons with me.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad3%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2353a5ff;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%231f4d7a;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad3)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3ERV%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Nikhil Joshi',
      role: 'Student',
      quote: 'The STEM opportunities and supportive teachers make learning exciting and meaningful for me.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad4%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2310b981;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23059669;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad4)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3ENJ%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Anita Singh',
      role: 'Parent',
      quote: 'The campus culture, communication, and opportunities are exceptional. It feels like a second home.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad5%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ec4899;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23be185d;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad5)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3EAS%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Kunal Bhatia',
      role: 'Alumni',
      quote: 'The school helped me discover both academic strength and personal discipline. I am grateful for that foundation.',
      avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad6%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%237c3aed;stop-opacity:1%22/%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%235b21b6;stop-opacity:1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23grad6)%22/%3E%3Ccircle cx=%2250%22 cy=%2235%22 r=%2218%22 fill=%22%23fff%22/%3E%3Cpath d=%22M30 65 Q50 75 70 65%22 fill=%22%23fff%22/%3E%3Ctext x=%2250%22 y=%2290%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23fff%22 text-anchor=%22middle%22%3EKB%3C/text%3E%3C/svg%3E'
    }
  ];

  readonly achievements: Achievement[] = [
    {
      title: '100% ICSE Results',
      value: '100%',
      description: 'Consistent academic excellence with strong board performance.',
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      title: '1500+ Happy Students',
      value: '1500+',
      description: 'A thriving learning community built on care and opportunity.',
      icon: 'fa-solid fa-users'
    },
    {
      title: '15+ Experienced Teachers',
      value: '15+',
      description: 'Skilled mentors dedicated to shaping confident learners.',
      icon: 'fa-solid fa-chalkboard-user'
    },
    {
      title: '10+ Years of Excellence',
      value: '10+',
      description: 'A trusted legacy of holistic education and continuous growth.',
      icon: 'fa-solid fa-award'
    }
  ];

  activeTestimonial = 0;
  autoSlideTimer: any;

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
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideTimer = window.setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial(): void {
    this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setActiveTestimonial(index: number): void {
    this.activeTestimonial = index;
  }
}
