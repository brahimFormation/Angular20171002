import { Injectable } from '@angular/core';
import { CollectionService } from '@app/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAction } from 'angularfire2/database';
import { Item } from '@app/items';

@Injectable()
export class SearchItemService {
  collection: Observable<Item[]>;

  constructor(private _CollectionService: CollectionService) {
    //this.collection = this._CollectionService.items;
  }

  // search(term: string): Observable<Item[]> {
  //   return this.collection.filter()
  // }

}
