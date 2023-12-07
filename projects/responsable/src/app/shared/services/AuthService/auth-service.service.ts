import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    const Data = sessionStorage.getItem('responsable');
    return !!Data;
  }
}
