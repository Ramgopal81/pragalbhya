import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  slides: HeroSlide[] = [
    {
      image: 'assets/images/hero-1.jpg',
      title: 'Welcome to New Pragalbhya Public School',
      subtitle: 'Excellence in Academics & Character Development',
      description: 'A learning environment where every student grows with confidence, curiosity, and compassion.'
    },
    {
      image: 'assets/images/hero-2.jpg',
      title: 'State-of-the-Art Campus & Facilities',
      subtitle: 'Modern infrastructure for holistic development',
      description: 'Our well-designed campus provides the perfect setting for learning, creativity, and growth.'
    },
    {
      image: 'assets/images/hero-3.jpg',
      title: 'Building Leaders of Tomorrow',
      subtitle: 'Nurturing minds, values, and vision',
      description: 'Join our vibrant community where education meets character building and endless possibilities.'
    }
  ];

  activeIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.activeIndex = index;
  }
}
