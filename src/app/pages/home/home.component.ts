import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { LeadershipSectionComponent } from '../../components/leadership-section/leadership-section.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { EventsNewsComponent } from '../../components/events-news/events-news.component';
import { TestimonialsAchievementsComponent } from '../../components/testimonials-achievements/testimonials-achievements.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WelcomeComponent, LeadershipSectionComponent, WhyChooseUsComponent, GalleryComponent, EventsNewsComponent, TestimonialsAchievementsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
