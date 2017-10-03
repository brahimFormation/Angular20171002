import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add: EventEmitter<Item> = new EventEmitter;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private modalService: NgbModal) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }

  isError(champs: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError('minlength');
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande à bien été ajoutée';
  }

  addItem() {
    this.add.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    this.reset();
    this.open();
  }

}
