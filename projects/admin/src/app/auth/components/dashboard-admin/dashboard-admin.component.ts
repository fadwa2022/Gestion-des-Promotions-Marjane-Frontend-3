import { Component } from '@angular/core';
import { PromotionsService } from '../../services/promotions/promotions.service';
import { PromotionModule } from '../../../models/promotion/promotion.module';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'
]
})
export class DashboardAdminComponent {
  promotions: PromotionModule;
  constructor(
    private promotionservice:PromotionsService) {}
    ngOnInit(): void {
      this.getpromotions();
    }

    getpromotions() {
      this.promotionservice.getPromotions().subscribe(
        (promotions) => {
          this.promotions = promotions;
        },
        (error) => {
        }
      );
    }
}
