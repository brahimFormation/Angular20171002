import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { ItemsRoutingModule } from '@app/items/items-routing.module';

import { ItemComponent } from '@app/items';
import { FormComponent } from '@app/items';
import { AdditemComponent } from '@app/items';
import { ListItemsComponent } from '@app/items';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@app/items/reducers';
import { ItemsEffectsService } from '@app/items/effects/items-effects.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    SharedModule,
    StoreModule.forFeature('items', reducers),
    EffectsModule.forFeature([ItemsEffectsService]),
  ],
  declarations: [
    ListItemsComponent,
    FormComponent,
    AdditemComponent,
    ItemComponent,
    SearchComponent
  ]
})
export class ItemsModule { }
