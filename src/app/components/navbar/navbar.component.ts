import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  readonly navItems = [
    { label: 'Home', route: '/' },
    {
      label: 'About',
      children: [
        { label: 'About School', route: '/about' },
        { label: 'Principal Message', route: '/about' }
      ]
    },
    {
      label: 'Academics',
      children: [
        { label: 'Programs', route: '/academics' },
        { label: 'Facilities', route: '/facilities' }
      ]
    },
    {
      label: 'Admissions',
      children: [
        { label: 'Admission Process', route: '/admissions' },
        { label: 'Apply Online', route: '/admissions' }
      ]
    },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact', route: '/contact' }
  ];

  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = window.localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }
}
