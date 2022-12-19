import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostComponent } from './shared/components/allpost/allpost.component';
import { CreatepostComponent } from './shared/components/createpost/createpost.component';
import { UpdatepostComponent } from './shared/components/updatepost/updatepost.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard' , pathMatch:'full'
  },
  {
    path: 'dashboard', component: AllpostComponent
  },
  {
    path: 'createpost', component: CreatepostComponent
  },
  {
    path: 'updatepost/:id', component: UpdatepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
