import { Component, OnInit } from '@angular/core';
import { CollectionService } from '@app/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent implements OnInit {
  collection: any;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    // this._CollectionService.collection.subscribe();
    this.collection = this._CollectionService.collection;
  }

  changeState(item: any, state: number) {
    console.log(item.key)
    this._CollectionService.changeState(item.key, state);
  }
}
