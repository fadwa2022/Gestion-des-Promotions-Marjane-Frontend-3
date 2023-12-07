import { Component } from '@angular/core';
import Swal from 'sweetalert2'

import { Router } from '@angular/router';
import { ResponsableService } from '../../services/responsable/responsable.service';
import { ResponsableModule } from '../../../models/responsable/responsable.module';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(
    private responsableService: ResponsableService,
    private router: Router) {}
  imagePath: string = 'assets/images/marjane (1).webp';
    email: string;
    password:string;
  ngOnInit(): void {
  }




     Login() {
        this.responsableService.getResponsables().subscribe(
          (responsable) => {
              if (responsable) {
                this.handleValid(responsable);
              } else {
                this.handleInvalid();
              }
          },
          (error) => {
            this.handleError('Error fetching : ' + error);
            this.removeItem();
          }
        );
      }

      private handleValid(responsables: ResponsableModule) {
        const responsablesAvecEmail = responsables['filter'](res => res.email === this.email);

  if (responsablesAvecEmail.length > 0) {
    let auMoinsUnMotDePasseCorrect = false;

    responsablesAvecEmail.forEach(responsable => {
      bcrypt.compare(this.password, responsable.password, (err, result) => {
        if (result) {
          auMoinsUnMotDePasseCorrect = true;
        this.saveToSessionStorage(responsable)
        this.router.navigate(['/dashboard']);

        }

        if (responsable === responsablesAvecEmail[responsablesAvecEmail.length - 1]) {
          if (!auMoinsUnMotDePasseCorrect) {
            console.error('Mot de passe incorrect');
          }
        }
      });
    });
        } else {
          this.removeItem();
          console.error('Email incorrect');
        }

      }

      private handleInvalid() {
        this.removeItem();
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
            }

      private saveToSessionStorage(responsable: ResponsableModule) {
        let Json = JSON.stringify(responsable);
        sessionStorage.setItem('responsable', Json);
      }

      private removeItem() {
        sessionStorage.removeItem('responsable');
      }

      private handleError(errorMessage: string) {
        this.removeItem();
        console.error(errorMessage);

     }


}
