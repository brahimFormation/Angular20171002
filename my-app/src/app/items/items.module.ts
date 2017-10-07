import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { ItemsRoutingModule } from '@app/items/items-routing.module';

import { ItemComponent } from '@app/items';
import { FormComponent } from '@app/items';
import { AdditemComponent } from '@app/items';
import { ListItemsComponent } from '@app/items';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [
    ListItemsComponent,
    FormComponent,
    AdditemComponent,
    ItemComponent
  ]
})
export class ItemsModule { }
