import { Component, OnInit, Input } from '@angular/core';
import { CollectionService } from '@app/core';

import { Item } from '../../models/item';
import { States } from '@app/shared/enums/states.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  states = States;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    // console.log(this.states)
  }

  changeState(key: string, state: number) {
    console.log(key);
    this._CollectionService.changeState(key, state);
  }
}