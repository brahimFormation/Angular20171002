import { Component, OnInit } from '@angular/core';

import { Item } from './../item';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  collection: Item[];
  constructor(private _AppComponent: AppComponent) { }

  ngOnInit() {
    this.collection = this._AppComponent.collection;
  }

}
