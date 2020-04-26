import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoesComponent} from './shoes/shoes.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'shoe', component: ShoesComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

@NgModule({
  declarations: [ShoesComponent],
  imports: [
    CommonModule
  ],
  bootstrap:[ShoesComponent]
})
export class ShoesmoduleModule { }

