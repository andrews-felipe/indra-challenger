import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  // LazyLoad
  { path: 'login', loadChildren: '../public/public.module#PublicModule' },
  { path: 'home', loadChildren: '../private/private.module#PrivateModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },  // guarda de módulo e rota

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
