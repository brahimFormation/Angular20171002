import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '@app/core';

import { States } from '@app/shared/enums/states.enum';
import { ItemId } from '@app/items/interfaces/item-id';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input('item') item: ItemId;
  states = States;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  deleteItem(item: ItemId) {
    this._CollectionService.delete(item);
  }

  changeState(item: ItemId, state: number) {
    // console.log(key);
    item.state = state;
    this._CollectionService.changeState(item);
  }
}
