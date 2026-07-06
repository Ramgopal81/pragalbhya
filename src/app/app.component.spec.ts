import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the expected site title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pragalbh Public School');
  });

  it('should render the main shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should render the floating WhatsApp enquiry button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.whatsapp-float');

    expect(button).toBeTruthy();
    expect(button?.getAttribute('aria-label')).toContain('WhatsApp');
  });

  it('should open WhatsApp when the enquiry button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const openSpy = spyOn(window, 'open');
    const component = fixture.componentInstance;

    component.handleWhatsAppClick();

    expect(openSpy).toHaveBeenCalled();
    expect(openSpy).toHaveBeenCalledWith(jasmine.any(String), '_blank', 'noopener,noreferrer');
  });
});
