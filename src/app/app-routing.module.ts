import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [

{
  path:'', component:AddComponent
},
{
  path:'table', component:TableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
