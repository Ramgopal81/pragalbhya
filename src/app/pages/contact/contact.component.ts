import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactCard {
  title: string;
  description: string;
  icon: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly contactCards: ContactCard[] = [
    {
      title: 'Address',
      description: 'Pragalbh Public School Near Lucknow Highway Shaheed Ashfaqulla Khan Dwar Rawanyia Poorab Kudwar Road Aliganj,Sultanpur 227805, Uttar Pradesh, India',
      icon: 'fa-solid fa-location-dot'
    },
    {
      title: 'Phone Numbers',
      description: '+91 9415181626 ',
      icon: 'fa-solid fa-phone-volume'
    },
    {
      title: 'Email Address',
      description: 'info@pragalbhpublicschool.com \n admissions@pragalbhpublicschool.com',
      icon: 'fa-solid fa-envelope'
    },
    {
      title: 'Office Hours',
      description: 'Mon - Fri: 8:00 AM - 3:00 PM \n Sat: 9:00 AM - 1:00 PM',
      icon: 'fa-solid fa-clock'
    }
  ];

  readonly socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com' },
    { name: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com' }
  ];

  contactForm: FormGroup;
  submitted = false;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      this.submitted = false;
      return;
    }

    this.submitted = true;
    this.contactForm.reset();
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted = false;
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}
