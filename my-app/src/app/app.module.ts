import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { StateDirective } from './state.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListItemComponent,
    ModalComponent,
    FormComponent,
    FilterPipe,
    StateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
