import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardResponsableRoutingModule } from './dashboard-responsable-routing.module';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';


@NgModule({
  declarations: [
    DashboardResponsableComponent
  ],
  imports: [
    CommonModule,
    DashboardResponsableRoutingModule
  ]
})
export class DashboardResponsableModule { }
