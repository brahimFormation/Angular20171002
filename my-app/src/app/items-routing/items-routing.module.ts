import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './../item-module/list-item/list-item.component';
import { FormComponent } from './../item-module/form/form.component';

const itemsRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'form', component: FormComponent },
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
