import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  currentPage: number = 1;
  itemsPerPage: number = 10;

  calculateRange(totalItems: number): { start: number; end: number } {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return { start, end };
  }
}
