import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '@app/items';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CollectionService } from '@app/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listItems: Observable<any>;

  form: FormGroup;
  searchCtrl: FormControl;

  constructor(fb: FormBuilder, private _CollectionService: CollectionService) {
    this.searchCtrl = fb.control('');
    this.form = fb.group({
      search: this.searchCtrl
    });
  }

  ngOnInit() {
    this.listItems = this.searchCtrl.valueChanges.debounceTime(300).distinctUntilChanged()
    .map(term => this._CollectionService.search(term));
  }

}
