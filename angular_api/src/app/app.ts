import { HttpClient } from '@angular/common/http';
import { Component, NgModule, signal } from '@angular/core';

import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_api');

  users: User[] = [];
  selectedUser: User = { name: '', email: '', age: null };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  onSubmit() {
    if (this.selectedUser.id) {
      // Update
      this.userService
        .updateUser(this.selectedUser.id, this.selectedUser)
        .subscribe(() => {
          this.loadUsers();
          this.resetForm();
        });
    } else {
      // Create
      this.userService.addUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.resetForm();
      });
    }
  }

  editUser(user: User) {
    this.selectedUser = { ...user }; // clone to avoid reference issues
  }

  deleteUser(id: string|undefined) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  resetForm() {
    this.selectedUser = { name: '', email: '', age: null };
  }
}
