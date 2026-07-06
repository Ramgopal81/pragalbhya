import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly quickLinks: FooterLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Academics', route: '/academics' },
    { label: 'Admissions', route: '/admissions' },
    { label: 'Facilities', route: '/facilities' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact', route: '/contact' }
  ];

  readonly admissionsLinks: FooterLink[] = [
    { label: 'Apply Online', route: '/admissions' },
    { label: 'Fee Structure', route: '/admissions' },
    { label: 'Download Prospectus', route: '/admissions' },
    { label: 'Admission Process', route: '/admissions' },
    { label: 'Scholarships', route: '/admissions' }
  ];

  readonly socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com' },
    { name: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com' }
  ];

  showScrollTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
