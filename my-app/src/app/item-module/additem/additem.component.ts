import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { CollectionService } from './../collection.service';

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
    // console.log(item);
    this._CollectionService.addItem(item);
  }
}
