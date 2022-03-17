import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MadHunterService} from "./services/mad-hunter.service";
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'employee-property', component: AddPropertyComponent},
  {path: 'list-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MadHunterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
