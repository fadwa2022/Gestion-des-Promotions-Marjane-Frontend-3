import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsableModule } from '../../../models/responsable/responsable.module';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  private responsableUrl = 'http://localhost:8080/api/responsables';

  constructor(private http: HttpClient) { }

  getResponsables(): Observable<ResponsableModule> {
    const url = `${this.responsableUrl}`;

    return this.http.get<ResponsableModule>(url);
  }}
