import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PromotionModule } from '../../../models/promotion/promotion.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {


  private promotionUrl = 'http://localhost:8080/api/promotions';

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<PromotionModule> {
    const url = `${this.promotionUrl}`;

    return this.http.get<PromotionModule>(url);
  }
  getPromotionById(promotionId: number): Observable<PromotionModule> {
    const url = `${this.promotionUrl}/${promotionId}`;
    return this.http.get<PromotionModule>(url);
  }

  addPromotion(promotion: PromotionModule): Observable<PromotionModule> {
    const url = `${this.promotionUrl}`;
    return this.http.post<PromotionModule>(url, promotion);
  }

  // updatePromotion(promotion: PromotionModule): Observable<PromotionModule> {
  //   const url = `${this.promotionUrl}/${promotion.id}`;
  //   return this.http.put<PromotionModule>(url, promotion);
  // }

  // deletePromotion(promotionId: number): Observable<void> {
  //   const url = `${this.promotionUrl}/${promotionId}`;
  //   return this.http.delete<void>(url);
  // }
}
