import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModule } from 'projects/admin/src/app/models/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl = 'http://localhost:8080/admin/';

  constructor(private http: HttpClient) { }

  getAdminByEmail(email: string): Observable<AdminModule> {
    const url = `${this.adminUrl}${email}`;

    return this.http.get<AdminModule>(url);
  }
}
