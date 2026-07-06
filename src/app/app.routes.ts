import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { EventsComponent } from './pages/events/events.component';
import { NewsComponent } from './pages/news/news.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { CareerComponent } from './pages/career/career.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Pragalbh Public School | Excellence in Education' },
  { path: 'about', component: AboutComponent, title: 'About Us | Pragalbh Public School' },
  { path: 'admissions', component: AdmissionsComponent, title: 'Admissions | Pragalbh Public School' },
  { path: 'academics', component: AcademicsComponent, title: 'Academics | Pragalbh Public School' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | Pragalbh Public School' },
  { path: 'events', component: EventsComponent, title: 'Events | Pragalbh Public School' },
  { path: 'news', component: NewsComponent, title: 'News | Pragalbh Public School' },
  { path: 'facilities', component: FacilitiesComponent, title: 'Facilities | Pragalbh Public School' },
  { path: 'faculty', component: FacultyComponent, title: 'Faculty | Pragalbh Public School' },
  { path: 'career', component: CareerComponent, title: 'Careers | Pragalbh Public School' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Pragalbh Public School' },
  { path: '**', redirectTo: '' }
];
