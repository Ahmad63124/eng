import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SerComponent } from './ser/ser.component';

const routes: Routes = [{
  path:'home' ,component:ProductComponent},
{path:'ser', component:SerComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
