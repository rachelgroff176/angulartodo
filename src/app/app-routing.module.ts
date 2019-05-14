import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{ path: '', pathMatch: 'full', redirectTo: '/root' },
  { path: '**', pathMatch: 'full', redirectTo: '/root' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
