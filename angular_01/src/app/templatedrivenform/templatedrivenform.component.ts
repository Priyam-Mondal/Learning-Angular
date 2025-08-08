import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  imports: [FormsModule, NgIf],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css',
})
export class TemplatedrivenformComponent {

  userDetails:any;

  addDetails(val: NgForm) {
    console.log(val);
    this.userDetails=val;
  }
}
