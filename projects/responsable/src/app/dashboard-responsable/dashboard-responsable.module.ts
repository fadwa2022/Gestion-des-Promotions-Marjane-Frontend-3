import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardResponsableRoutingModule } from './dashboard-responsable-routing.module';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardResponsableComponent
  ],
  imports: [
    CommonModule,
    DashboardResponsableRoutingModule,
    FormsModule
  ]
})
export class DashboardResponsableModule { }
