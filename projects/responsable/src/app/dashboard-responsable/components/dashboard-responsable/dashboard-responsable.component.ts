import { Component } from '@angular/core';
import { SessionDataService } from '../../../shared/session-data.service';
import { PromotionsService } from '../../services/promotions/promotions.service';
import { ResponsableService } from '../../services/responsable/responsable.service';
import { CategorieService } from '../../services/categorie/categorie.service';
import { ProduitsService } from '../../services/produits/produits.service';
import { ResponsableModule } from '../../../models/responsable/responsable.module';
import { CategorieModule } from '../../../models/categorie/categorie.module';
import { ProduitModule } from '../../../models/produit/produit.module';
import { PromotionModule } from '../../../models/promotion/promotion.module';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent {
  categories:CategorieModule[];
  products: ProduitModule [];
  productstable: ProduitModule[];
  promotions: PromotionModule[];
  promotionsresponsable: PromotionModule[];

  constructor(
    private sessiondata:SessionDataService,
    private promotionservice:PromotionsService,
    private responsableservice:ResponsableService,
    private categoriessevice:CategorieService,
    private productsservice:ProduitsService,
    ){}

    responsable:ResponsableModule;
    ngOnInit(): void {
      this.responsable=this.sessiondata.getSessionData();
      this.loadPromotions();
    }

    loadcategories():void{
      this.categoriessevice.getCategories().subscribe(
        (categories) => {
          if (Array.isArray(categories)) {
          this.categories=categories;
          console.log(categories)
          }
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
    loadproducts():void{
      this.productsservice.getProducts().subscribe(
        (products) => {
          if (Array.isArray(products)) {
          this.products=products;
          this.productstable=products;

        }
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
    loadPromotions(): void {
      this.promotionservice.getPromotions().subscribe(
        (promotions) => {
          this.handlePromotionsResponse(promotions);
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
    private handlePromotionsResponse(promotions: any): void {
      if (Array.isArray(promotions)) {
        this.promotions = promotions;
        const today = new Date().toISOString().split('T')[0];
        this.promotionsresponsable = this.promotions.filter(
          (promotion) =>
            promotion.responsable.id === this.responsable.id &&
            this.isSameDate(new Date(promotion.datepromo), new Date(today))
        );
      } else {
        console.error('La réponse du service n\'est pas un tableau.');
      }
    }
    private isSameDate(date1: Date, date2: Date): boolean {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    }
    private handleError(errorMessage: string) {
      console.error(errorMessage);

   }
  }
