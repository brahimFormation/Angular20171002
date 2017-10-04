import { Component, OnInit } from '@angular/core';

import { CollectionService } from './../collection.service';
import { Item } from './../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection: Item[];
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
