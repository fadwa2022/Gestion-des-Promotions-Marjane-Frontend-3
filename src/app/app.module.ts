import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResponsableListComponent } from './components/responsable-list/responsable-list.component';
import { ResponsableDetailComponent } from './components/responsable-detail/responsable-detail.component';
import { ResponsableEditComponent } from './components/responsable-edit/responsable-edit.component';
import { ResponsableAddComponent } from './components/responsable-add/responsable-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsableListComponent,
    ResponsableDetailComponent,
    ResponsableEditComponent,
    ResponsableAddComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
