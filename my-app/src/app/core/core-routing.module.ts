import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/core';
import { PageNotFoundComponent } from '@app/core';
import { AuthGuard } from '@app/core/guards/auth.guard';


const itemsRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class CoreRoutingModule { }
