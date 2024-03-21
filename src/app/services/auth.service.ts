// auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username = ''; // Assuming you store the username once the user is logged in

  constructor(private router: Router) {}

  login(username: string, password: string): void {
    // Implement your authentication logic here (e.g., API call to verify credentials)
    // Upon successful authentication, set loggedIn to true and store username
    this.loggedIn = true;
    this.username = username;
    // Optionally, you can navigate to a different page upon successful login
    this.router.navigate(['/home']);
  }

  logout(): void {
    // Perform logout logic (e.g., clear session, remove tokens)
    this.loggedIn = false;
    this.username = '';
    // Navigate to login page upon logout
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // Return the current authentication status
    return this.loggedIn;
  }

  getUsername(): string {
    // Return the stored username
    return this.username;
  }
}
