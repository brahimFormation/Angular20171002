import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { ItemId } from '@app/items/interfaces/item-id';
import { CollectionService } from '@app/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent {
  collection: Observable<ItemId[]>;

  constructor(private service : CollectionService) {
    this.collection  = this.service.collection;
  }
}
