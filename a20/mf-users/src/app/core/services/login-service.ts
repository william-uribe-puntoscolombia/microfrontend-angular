import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  login() {
    // Perform login logic
    this.isLoggedInSubject.next(true);
  }
  checkLogin() {
    return this.isLoggedInSubject.value;
  }

  logout() {
    // Perform logout logic
    this.isLoggedInSubject.next(false);
  }
}
