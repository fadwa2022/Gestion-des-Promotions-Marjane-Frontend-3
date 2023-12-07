import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsableModule } from '../responsable/responsable.module';
import { CategorieModule } from '../categorie/categorie.module';
import { StatutModule } from '../statut/statut.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PromotionModule {
  id:Number;
  responsable:ResponsableModule;
  categorie:CategorieModule;
  produit:PromotionModule;
  datepromo: Date;
  statut:StatutModule;
  quantity:number;
}
