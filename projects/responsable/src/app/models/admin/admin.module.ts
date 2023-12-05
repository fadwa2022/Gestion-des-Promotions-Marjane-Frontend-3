import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentreModule } from '../centre/centre.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CentreModule
  ]
})
export class AdminModule {
  id:number;
  email:string;
  password:string;
  centre:CentreModule
 }
