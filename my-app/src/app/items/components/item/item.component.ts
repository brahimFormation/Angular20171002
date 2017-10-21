import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '@app/core';

import { Item } from '../../interfaces/item';
import { States } from '@app/shared/enums/states.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input('item') item: Item;
  states = States;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState(key: string, state: number) {
    console.log(key);
    this._CollectionService.changeState(key, state);
  }
}
