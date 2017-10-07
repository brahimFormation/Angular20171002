import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '@app/items';

@Injectable()
export class CollectionService {
  collection: Observable<AngularFireAction<any>[]>;
  itemsRef: AngularFireList<{}>;
  
  constructor(private afDb: AngularFireDatabase) {
    this.itemsRef = afDb.list('collection');
    // this.collection = this.itemsRef.valueChanges();
    this.collection = this.itemsRef.snapshotChanges();
  }
  
  addItem(item: Item) {
    this.afDb.list('collection').push(item);
  }

  changeState(key: string, newState: number) {
    this.itemsRef.update(key, {state: newState});
  }
}
