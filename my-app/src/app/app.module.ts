import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { StateDirective } from './state.directive';
import { CollectionService } from './collection.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListItemComponent,
    ModalComponent,
    FormComponent,
    FilterPipe,
    StateDirective,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
