import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Responsable } from '../models/responsable.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private apiUrl = 'http://localhost:8080/api/responsables';

  constructor(private http: HttpClient) {}

  getAllResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.apiUrl);
  }

  getResponsableById(id: number): Observable<Responsable> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Responsable>(url);
  }

  createResponsable(responsable: Responsable): Observable<Responsable> {
    return this.http.post<Responsable>(this.apiUrl, responsable);
  }

  updateResponsable(id: number, responsable: Responsable): Observable<Responsable> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Responsable>(url, responsable);
  }

  deleteResponsable(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
