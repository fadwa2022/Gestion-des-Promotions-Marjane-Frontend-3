import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { AdminModule } from 'projects/admin/src/app/models/admin/admin.module';
import { AdminService } from 'projects/admin/src/app/auth/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(
    private adminService: AdminService,
    private router: Router) {}
  imagePath: string = 'assets/images/marjane (1).webp';
    email: string;
    password:string;
  ngOnInit(): void {
  }




      adminLogin() {
        this.adminService.getAdminByEmail(this.email).subscribe(
          (admin) => {
              if (admin) {
                this.handleValidAdmin(admin);
              } else {
                this.handleInvalidAdmin();
              }
          },
          (error) => {
            this.handleError('Error fetching admin: ' + error);
          }
        );
      }

      private handleValidAdmin(admin: AdminModule) {
        if (this.password === admin.password) {
          this.saveAdminToSessionStorage(admin);
          this.router.navigate(['/dashboard']);
        } else {
          this.removeItem();

        Swal.fire({
          title: 'error',
          text: '',
          icon: 'warning',
          confirmButtonText: 'Cool'
        })
        }
      }

      private handleInvalidAdmin() {
        this.removeItem();
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
            }

      private saveAdminToSessionStorage(admin: AdminModule) {
        let adminJson = JSON.stringify(admin);
        sessionStorage.setItem('admin', adminJson);
      }

      private removeItem() {
        sessionStorage.removeItem('admin');
      }

      private handleError(errorMessage: string) {
        this.removeItem();
        console.error(errorMessage);

     }


}
