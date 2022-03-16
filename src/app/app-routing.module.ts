import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
 // { path: '**', redirectTo: 'login', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then( (x) => x.DashboardModule) },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
