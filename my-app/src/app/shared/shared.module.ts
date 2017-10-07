/**
 * @description SharedModule doesn’t have any dependency to the rest of our application. All components (directives, pipes, components) don’t import and inject services from coreModule or other featuresModule in their constructors
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FilterPipe } from '@app/shared';

import { StateDirective } from '@app/shared';

import { MenuComponent } from '@app/shared';
import { ModalComponent } from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    FilterPipe,
    StateDirective,
    MenuComponent,
    ModalComponent
  ],
  exports: [
    FilterPipe,
    StateDirective,
    MenuComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }