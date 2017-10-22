import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Item } from '@app/items';
import { ItemId } from '@app/items/interfaces/item-id';
import { BehaviorSubject } from 'rxjs';
import  * as firebase  from 'firebase/app';

@Injectable()
export class CollectionService {
  search$: BehaviorSubject<string|null>;

  private itemsCollection: AngularFirestoreCollection<Item>;
  collection: Observable<ItemId[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.search$ = new BehaviorSubject(null);

    this.getCollection();
  }

  getCollection() {
    this.collection = this.search$.switchMap(term => {
     return this.afs.collection<Item>('collection', ref => {
      let query:firebase.firestore.CollectionReference | firebase.firestore.Query  = ref;
      if (term) {
        query = query.where('name','==',term);
        console.log(term);
      }
      else {
        query = query.orderBy('name')
      }
      return query;
      }).snapshotChanges().map(res => {
        return res.map(snap => {
          return {
            id: snap.payload.doc.id,
            name: snap.payload.doc.data().name,
            reference: snap.payload.doc.data().reference,
            state: snap.payload.doc.data().state
          }
        });
      });
    });
  }

  search(term: string) {
    this.search$.next(term);
  }

  addItem(item: Item) {
    this.afs.collection<Item>('collection').add(item);
  }

  changeState(item: ItemId) {
    this.afs.doc<Item>('collection/'+item.id).update(item);
  }

  delete(item: ItemId) {
    this.afs.doc<Item>('collection/'+item.id).delete();
  }
}
