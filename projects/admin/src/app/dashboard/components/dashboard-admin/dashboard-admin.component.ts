import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../../services/promotions/promotions.service';
import { PromotionModule } from '../../../models/promotion/promotion.module';
import { SessionDataService } from '../../../shared/session-data.service';
import { ResponsableService } from '../../services/responsable/responsable.service';
import { ResponsableModule } from '../../../models/responsable/responsable.module';
import { CategorieService } from '../../services/categorie/categorie.service';
import { CategorieModule } from '../../../models/categorie/categorie.module';
import { PaginationService } from '../../services/PaginationService/pagination-service.service';
import { ProduitsService } from '../../services/produits/produits.service';
import { ProduitModule } from '../../../models/produit/produit.module';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'
]
})
export class DashboardAdminComponent implements OnInit {
  promotions: PromotionModule[];
  categories:CategorieModule[];
  promotionsadmin: PromotionModule[];
  responsables:ResponsableModule[];
  responsablesadmin:ResponsableModule[];
  pageSize = 10;
  localStorageData: any;
  admin:any;
  products:ProduitModule[];
  productstable:ProduitModule[];
  selectedCategory: number;
  selectedResponsable: number;
  selectedProduct: number;
  quantity: number;
  datePromo: string;
  p: number = 1;
  constructor(
    private promotionservice:PromotionsService,
    private sessiondata:SessionDataService,
    private responsableservice:ResponsableService,
    private categoriessevice:CategorieService,
    private productsservice:ProduitsService,
    private paginationService: PaginationService
    ) {}
    ngOnInit(): void {
      this.loadPromotions();
      this.loadResponsable();
      this.loadcategories();
      this.loadproducts();
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
 loadResponsable(): void {
  this.responsableservice.getResponsables().subscribe(
    (responsables) => {
     this.handleresponsablsResponse(responsables);
    },
    (error) => {
      this.handleError(error);
    }
  );
}
private handlePromotionsResponse(promotions: any): void {
      if (Array.isArray(promotions)) {
        this.promotions = promotions;
        this.admin = this.sessiondata.getSessionData();
        this.promotionsadmin = this.promotions.filter(
          (promotion) => promotion.responsable.admin.id === this.admin.id
        );
            } else {
        console.error('La réponse du service n\'est pas un tableau.');
      }
    }
private handleresponsablsResponse(responsables: any): void {
      if (Array.isArray(responsables)) {
        this.responsables = responsables;
        this.admin = this.sessiondata.getSessionData();
        this.responsablesadmin = this.responsables.filter(
          (resp) => resp.admin.id === this.admin.id
        );
        console.log(this.responsablesadmin)

            } else {
        console.error('La réponse du service n\'est pas un tableau.');
      }
    }
private handleError(errorMessage: string) {
      console.error(errorMessage);

   }
   filterProducts(): void {

    if (this.selectedCategory) {
      let selectedCategoryid = Number(this.selectedCategory)
    this.products = this.productstable.filter(product => product.categorie.id == selectedCategoryid);
    } else {
      this.loadproducts();
    }
  }
  creatdormsubmit(){

  }

  submitForm(): void {

    const formData = {
      responsable_id: this.selectedResponsable,
      categorie_id: this.selectedCategory,
      produit_id: this.selectedProduct,
      datepromo: this.datePromo,
      statut: "IN_PROCESS",
      quantity: this.quantity
    }
console.log(formData)
    this.promotionservice.addPromotion(formData).subscribe(
      (response) => {
        console.log('Données envoyées avec succès', response);
        window.location.reload();

      },
      (error) => {
        console.error('Erreur lors de l\'envoi des données', error);
      }
    );
  }
}

