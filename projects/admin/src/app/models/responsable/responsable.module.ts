import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';
import { RayonModule } from '../rayon/rayon.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResponsableModule {
  id: number;
  email: string;
  password: string;
  admin:AdminModule;
  rayon:RayonModule
}
