import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './shared/component/AuthGuard/auth-guard/auth-guard.component';
import { DashboardResponsableComponent } from './dashboard-responsable/components/dashboard-responsable/dashboard-responsable.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardAdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardResponsableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
