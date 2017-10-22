import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { ItemId } from '@app/items/interfaces/item-id';
import { CollectionService } from '@app/core';
import { Store } from '@ngrx/store';
import  * as item from "@app/items/actions/items";
import * as fromItem from "@app/items/reducers"
import { Item } from '@app/items';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent {
  collection: Store<Item[]>;


  constructor(private service : CollectionService, private store: Store<any>) {
    // this.collection  = this.service.collection;
    this.collection = this.store.select(fromItem.getItemsEntities);
    this.store.dispatch(new item.LoadItemAction());
    console.log(this.collection)
  }
}
