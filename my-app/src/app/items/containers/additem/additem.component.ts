import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '@app/shared';
import { CollectionService } from '@app/core';
import { Item } from '@app/items';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  constructor(private _CollectionService: CollectionService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  addItem(item: Item) {
    this._CollectionService.addItem(item);
  }

  openModal(modalParams: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = modalParams.msg;
    modalRef.componentInstance.route = modalParams.route;
  }
}
