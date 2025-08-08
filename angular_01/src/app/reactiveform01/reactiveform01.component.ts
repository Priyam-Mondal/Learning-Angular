import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform01',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactiveform01.component.html',
  styleUrl: './reactiveform01.component.css',
})
export class Reactiveform01Component {
  name1 = new FormControl('username');
  password1 = new FormControl('default');

  setValues() {
    this.name1.setValue('default');
    this.password1.setValue('test');
  }

  // form groupping
  profileGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
  });

  onSubmit() {
    console.log(this.profileGroup.value);
  }
  get name() {
    return this.profileGroup.get('name');
  }
  get password() {
    return this.profileGroup.get('password');
  }
  get email() {
    return this.profileGroup.get('email');
  }
}
