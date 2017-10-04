import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './../item-module/list-item/list-item.component';
import { FormComponent } from './../item-module/form/form.component';
import { AdditemComponent } from '../item-module/additem/additem.component';

const itemsRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'additem', component: AdditemComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  declarations: []
})
export class ItemsRoutingModule { }
