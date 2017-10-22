/**
 * @description All services which have to have one and only one instance per application (singleton services) should be implemented here
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '@env/environment.prod';

import { CollectionService } from '@app/core';

import { HomeComponent } from '@app/core';
import { PageNotFoundComponent } from '@app/core';
import { AuthService } from '@app/core/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  exports: [
  ],
  providers: [
    CollectionService,
    AuthService
  ]
})
export class CoreModule {
  /**
   * @constructor make sure CoreModule is imported only by one NgModule the AppModule
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
