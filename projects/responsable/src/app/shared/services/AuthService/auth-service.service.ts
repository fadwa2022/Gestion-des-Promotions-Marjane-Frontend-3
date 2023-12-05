import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    const adminData = sessionStorage.getItem('admin');
    return !!adminData; // Returns true if 'admin' attribute is present, false otherwise
  }
}
