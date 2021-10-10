import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { initialPageRoutes } from './initial-page/initial-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home/init',
    pathMatch: 'full'
  },
  ...initialPageRoutes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
