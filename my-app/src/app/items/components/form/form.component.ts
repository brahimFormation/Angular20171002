import { Component, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '@app/items';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  @Output() modalParams: EventEmitter<Object> = new EventEmitter();

  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder) {
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

  isError(champs: string) {
    return this.form.get(champs).dirty && this.form.get(champs).hasError('minlength');
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  openModal() {
    this.modalParams.emit({
      msg: 'Votre commande à bien été ajoutée',
      route: 'items/list'
    });
  }

  treatmentItem() {
    this.newItem.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    this.reset();
    this.openModal();
  }

}
