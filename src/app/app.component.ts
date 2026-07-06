import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Pragalbh Public School';
  readonly whatsAppNumber = '919415181626';
  readonly whatsAppMessage = 'Hello%20I%20want%20to%20know%20about%20admission%20at%20New%20Pragalbhya%20Public%20School.';
  readonly whatsAppUrl = `https://wa.me/${this.whatsAppNumber}?text=${this.whatsAppMessage}`;
  isNotificationVisible = false;
  isNotificationDismissed = false;
  bottomOffset = '1.1rem';

  private readonly notificationDelayMs = 5000;
  private readonly notificationHideMs = 8000;
  private notificationTimer?: ReturnType<typeof window.setTimeout>;
  private hideTimer?: ReturnType<typeof window.setTimeout>;

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.applySeoDefaults();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applySeoDefaults());

    this.scheduleNotification();
  }

  ngAfterViewInit(): void {
    this.syncFloatingButtonOffset();
    window.addEventListener('scroll', this.syncFloatingButtonOffset.bind(this), { passive: true });
    window.addEventListener('resize', this.syncFloatingButtonOffset.bind(this));
  }

  ngOnDestroy(): void {
    if (this.notificationTimer) {
      window.clearTimeout(this.notificationTimer);
    }

    if (this.hideTimer) {
      window.clearTimeout(this.hideTimer);
    }
  }

  handleWhatsAppClick(event: Event): void {
    event.preventDefault();
    this.hideNotification();

    if (window.innerWidth <= 768) {
      const mobileTarget = `whatsapp://send?phone=${this.whatsAppNumber}&text=${decodeURIComponent(this.whatsAppMessage)}`;
      window.location.href = mobileTarget;
      window.setTimeout(() => {
        window.open(this.whatsAppUrl, '_blank', 'noopener,noreferrer');
      }, 250);
      return;
    }

    window.open(this.whatsAppUrl, '_blank', 'noopener,noreferrer');
  }

  dismissNotification(): void {
    this.isNotificationVisible = false;
    this.isNotificationDismissed = true;
    this.clearNotificationTimers();
  }

  private scheduleNotification(): void {
    this.clearNotificationTimers();
    this.notificationTimer = window.setTimeout(() => {
      if (!this.isNotificationDismissed) {
        this.isNotificationVisible = true;
      }

      this.hideTimer = window.setTimeout(() => {
        this.isNotificationVisible = false;
      }, this.notificationHideMs - this.notificationDelayMs);
    }, this.notificationDelayMs);
  }

  private hideNotification(): void {
    this.isNotificationVisible = false;
    this.isNotificationDismissed = true;
    this.clearNotificationTimers();
  }

  private syncFloatingButtonOffset(): void {
    const hasScrollTopButton = Boolean(document.querySelector('.scroll-top'));
    this.bottomOffset = hasScrollTopButton ? '5.4rem' : '1.1rem';
    document.documentElement.style.setProperty('--whatsapp-offset', this.bottomOffset);
  }

  private clearNotificationTimers(): void {
    if (this.notificationTimer) {
      window.clearTimeout(this.notificationTimer);
    }

    if (this.hideTimer) {
      window.clearTimeout(this.hideTimer);
    }
  }

  private applySeoDefaults(): void {
    const pageTitle = this.titleService.getTitle() || 'Pragalbh Public School | CBSE School in Sultanpur';
    const description = 'Pragalbh Public School offers academic excellence, modern facilities, and holistic development for students in Sultanpur, Uttar Pradesh.';
    const url = `${window.location.origin}${this.router.url}`;

    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: 'Pragalbh Public School, Sultanpur school, CBSE school, admissions, academics, facilities' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Pragalbh Public School' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    this.metaService.addTag({ rel: 'canonical', href: url });
  }
}
 