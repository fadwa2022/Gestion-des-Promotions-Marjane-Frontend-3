import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(
    private fb:FormBuilder,
    private adminService: AdminService) {}
    loginForm:FormGroup
  imagePath: string = 'assets/images/marjane (1).webp';

ngOnInit():void{
  this.createForm()
}
  createForm() {
    this.loginForm= this.fb.group({
      email:['' ,[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

      adminLogin() {
        console.log(this.loginForm.value)

      //   this.adminService.getAdminByEmail(this.email).subscribe(
      //     (admin) => {
      //       if (admin) {
      //         this.handleValidAdmin(admin);
      //       } else {
      //         this.handleInvalidAdmin();
      //       }
      //     },
      //     (error) => {
      //       console.error('Error fetching admin:', error);
      //     }
      //   );
      // }

      // private handleValidAdmin(admin: AdminModule) {
      //   if (this.password === admin.password) {
      //     this.saveAdminToSessionStorage(admin);
      //   } else {
      //     this.handleError('Incorrect password!');
      //   }
      // }

      // private handleInvalidAdmin() {
      //   this.removeItem();
      //   console.log('Admin not found for the given email.');
      // }

      // private saveAdminToSessionStorage(admin: AdminModule) {
      //   let adminJson = JSON.stringify(admin);
      //   sessionStorage.setItem('admin', adminJson);
      // }

      // private removeItem() {
      //   sessionStorage.removeItem('admin');
      // }

      // private handleError(errorMessage: string) {
      //   this.removeItem();
      //   console.error(errorMessage);
      //
     }

}
