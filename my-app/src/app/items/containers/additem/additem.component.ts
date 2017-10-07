import { Component, OnInit } from '@angular/core';

import { CollectionService } from '@app/core';
import { Item } from '@app/items';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  addItem(item: Item) {
    this._CollectionService.addItem(item);
  }
}
