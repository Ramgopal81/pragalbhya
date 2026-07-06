import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadershipSectionComponent } from './leadership-section.component';

describe('LeadershipSectionComponent', () => {
  let component: LeadershipSectionComponent;
  let fixture: ComponentFixture<LeadershipSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipSectionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadershipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the leadership section title', () => {
    expect(component.sectionTitle).toContain('Leadership');
  });
});
