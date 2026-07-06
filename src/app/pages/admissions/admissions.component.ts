import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface AdmissionStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface AdmissionHelpItem {
  title: string;
  description: string;
  icon: string;
  linkText: string;
}

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
  readonly admissionSteps: AdmissionStep[] = [
    { step: '01', title: 'Register Online', description: 'Create your profile and fill in the student details.', icon: 'fa-solid fa-user-plus' },
    { step: '02', title: 'Submit Documents', description: 'Upload academic records, address proof and ID documents.', icon: 'fa-solid fa-file-circle-check' },
    { step: '03', title: 'Entrance Assessment', description: 'A simple evaluation to understand readiness and fit.', icon: 'fa-solid fa-pen-ruler' },
    { step: '04', title: 'Parent Interaction', description: 'Meet our team to discuss your child’s future learning journey.', icon: 'fa-solid fa-handshake' },
    { step: '05', title: 'Fee Payment', description: 'Secure your admission with a convenient fee payment option.', icon: 'fa-solid fa-credit-card' },
    { step: '06', title: 'Admission Confirmed', description: 'Congratulations, your child is now part of the school family.', icon: 'fa-solid fa-circle-check' }
  ];

  readonly helpCards: AdmissionHelpItem[] = [
    { title: 'Admission Helpline', description: 'Call us for complete guidance on admissions and forms.', icon: 'fa-solid fa-phone-volume', linkText: '+91 9415181626' },
    { title: 'School Timing', description: 'The school remains open from 8:00 AM to 3:00 PM on working days.', icon: 'fa-solid fa-clock', linkText: '8:00 AM - 3:00 PM' },
    { title: 'Download Prospectus', description: 'Get a complete overview of our academic programs and facilities.', icon: 'fa-solid fa-download', linkText: 'Download PDF' }
  ];

  admissionForm: FormGroup;
  submitted = false;

  constructor(private readonly fb: FormBuilder) {
    this.admissionForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      fatherName: ['', [Validators.required, Validators.minLength(3)]],
      motherName: ['', [Validators.required, Validators.minLength(3)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      classApplying: ['', Validators.required],
      previousSchool: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    this.admissionForm.markAllAsTouched();

    if (this.admissionForm.invalid) {
      this.submitted = false;
      return;
    }

    this.submitted = true;
    this.admissionForm.reset({ terms: false });
  }

  resetForm(): void {
    this.admissionForm.reset({ terms: false });
    this.submitted = false;
    this.admissionForm.markAsPristine();
    this.admissionForm.markAsUntouched();
  }
}
