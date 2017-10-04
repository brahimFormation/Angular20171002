import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Item } from './item';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class CollectionService {
  collection: any[] = [];
  constructor(private database: AngularFireDatabase) {
    // const Observalbe = Observable.of(this.database.list('/collection'));
    // this.Observable.subscribe((data) => {
    //   this.collection = data;
    // })
    this.getItems();
  }

  getItems() {
    this.database.list('/collection')
    .valueChanges()
    .subscribe((data) => {
      this.collection = data;
    });
  }

  addItem(item: Item) {
    this.database.list('/collection').push(item);
    this.getItems();
  }
}
