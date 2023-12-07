import { Injectable } from '@angular/core';
import { ResponsableModule } from '../models/responsable/responsable.module';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor() { }
  getSessionData(): ResponsableModule | undefined {
    const responsableJson = sessionStorage.getItem('responsable');
    if (responsableJson) {
      const responsable: ResponsableModule = JSON.parse(responsableJson);
      return responsable;
    } else {
      console.error('No responsable data found in sessionStorage');
      return undefined;
    }
  }
}
