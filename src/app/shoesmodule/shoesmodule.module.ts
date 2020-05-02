import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoesComponent} from './shoes/shoes.component';
import { RouterModule, Routes } from '@angular/router';
import {AppService} from '../appservice';


const routes: Routes = [
  { path: 'shoe', component: ShoesComponent }
];

export const UserRoutes = RouterModule.forChild(routes);

@NgModule({
  declarations: [ShoesComponent],
  imports: [
    CommonModule
  ],
  providers:[AppService],
  bootstrap:[ShoesComponent]

})
export class ShoesmoduleModule { }

