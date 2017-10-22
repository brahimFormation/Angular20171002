import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import  * as item from "@app/items/actions/items";
import { CollectionService } from '@app/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsEffectsService {

  @Effect()
  getItems$: Observable<Action> = this.actions$
      .ofType(item.LOAD)
      .switchMap(() => {
        return this._CollectionService.collection.map((items) => new item.LoadItemSuccessAction(items))
        .catch(() => Observable.of(null)) ;
      });

  constructor(private _CollectionService: CollectionService, private actions$: Actions) { }

}
