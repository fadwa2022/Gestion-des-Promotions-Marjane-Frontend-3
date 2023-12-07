import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategorieModule } from '../../../models/categorie/categorie.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private categorieUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategorieModule> {
    const url = `${this.categorieUrl}`;

    return this.http.get<CategorieModule>(url);
  }
  getCategorieById(categorieId: number): Observable<CategorieModule> {
    const url = `${this.categorieUrl}/${categorieId}`;
    return this.http.get<CategorieModule>(url);
  }
}
