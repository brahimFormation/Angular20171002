import { Component, OnInit } from '@angular/core';
import { CollectionService } from '@app/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Item } from '@app/items';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})

export class ListItemsComponent implements OnInit {
  collection: any;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.getMapCollection();
  }

  getMapCollection() {
    this._CollectionService.collection.map((res) => {
      return res.map(data => {
        return {
          key: data.key,
          name: data.payload.val().name,
          reference: data.payload.val().reference,
          state: data.payload.val().state
        }
      });
    }).subscribe(result => {
      this.collection = result;
      // console.log(this.collection)
    });
  }
}
