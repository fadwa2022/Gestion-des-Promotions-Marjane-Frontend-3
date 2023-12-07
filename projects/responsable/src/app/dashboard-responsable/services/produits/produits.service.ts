import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProduitModule } from '../../../models/produit/produit.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private produitsUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProduitModule> {
    const url = `${this.produitsUrl}`;

    return this.http.get<ProduitModule>(url);
  }
  getProduitById(produitId: number): Observable<ProduitModule> {
    const url = `${this.produitsUrl}/${produitId}`;
    return this.http.get<ProduitModule>(url);
  }}
