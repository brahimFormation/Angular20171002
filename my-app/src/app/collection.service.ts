import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectionService {
  collection: Item[];
  constructor() {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '2314', name: 'Patrick', state: 1}),
      new Item({reference: '2277', name: 'Quentin', state: 2})
    ];
  }

  addItem(item: Item) {
    this.collection.push(item);
  }
}
