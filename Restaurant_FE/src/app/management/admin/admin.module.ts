import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { NgZorroModule } from '../../Shared/NgZorroModule';
import { PrimeNgModule } from '../../Shared/PrimeNgModule';


@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroModule,
    PrimeNgModule
  ]
})
export class AdminModule { }
