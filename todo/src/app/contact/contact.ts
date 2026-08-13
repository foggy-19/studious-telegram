import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  group = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    messageControl: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  constructor() {}

  submit() {
    if (!this.group.valid) {
      console.log('invalid');
      return;
    }

    console.log('submit');
  }

  isInvalid(controller: string): boolean {
    const control = this.group.get(controller);
    if (control === null) {
      return false;
    }

    return control.invalid && (control.dirty || control.touched);
  }

  hasError(controller: string, error: string): boolean {
    return this.group.get(controller)?.hasError(error) ?? false;
  }
}
