import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'items', loadChildren: './items/items.module#ItemsModule', canActivate: [AuthGuard] },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy:  PreloadAllModules}
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
