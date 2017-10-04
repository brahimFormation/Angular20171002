import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ListItemComponent } from './../item-module/list-item/list-item.component';
import { FormComponent } from './../item-module/form/form.component';
import { HomeComponent } from './../home/home.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
