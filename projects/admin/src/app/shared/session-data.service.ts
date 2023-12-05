import { Injectable } from '@angular/core';
import { AdminModule } from '../models/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor() { }
  getSessionData(): AdminModule | undefined {
    const adminJson = sessionStorage.getItem('admin');
    if (adminJson) {
      const admin: AdminModule = JSON.parse(adminJson);
      return admin;
    } else {
      console.error('No admin data found in sessionStorage');
      return undefined;
    }
  }
}
