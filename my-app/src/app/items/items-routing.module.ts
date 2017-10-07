import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListItemsComponent } from '@app/items';
import { AdditemComponent } from '@app/items';

const itemsRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AdditemComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
