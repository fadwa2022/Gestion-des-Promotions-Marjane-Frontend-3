import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieModule } from '../categorie/categorie.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule {
 id:Number;
 produit:String;
 categorie:CategorieModule;

 }
