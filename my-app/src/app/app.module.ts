import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';

import { environment } from '@env/environment';

import { AppComponent } from '@app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from '@app/shared/util/custom-router-state-serializer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({ routerReducer: routerReducer }),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    {provide: 'VERSION', useValue: 'v2.0'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
