import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ProductinfoComponent} from './productinfo/productinfo.component';
import { HomeComponent } from './home/home.component';
import {OrderComponent} from './order/order.component';
import {OrderlisComponent} from './orderlis/orderlis.component';
import {MenproductComponent} from './menproduct/menproduct.component';
import {WomensproductComponent} from './womensproduct/womensproduct.component';
import {ShoesComponent} from './shoesmodule/shoes/shoes.component';
import {JewlearyComponent} from './jewleary/jewleary.component';
import {CheppalesComponent} from './cheppales/cheppales.component';
//import {ShoesmoduleModule} from './shoesmodule/shoesmodule.module';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'productinfo', component:ProductinfoComponent},
  {path:'order', component:OrderComponent},
  {path:'orderlist',component:OrderlisComponent},
  {path:'menproduct',component:MenproductComponent},
  {path :'womensproduct',component:WomensproductComponent},
  {path :"cheppal" , component:CheppalesComponent},
  {path:'jewalery', component:JewlearyComponent},
 // {path:'shoes',component:ShoesComponent}
 { path: 'shoes', loadChildren: './shoesmodule/shoesmodule.module#ShoesmoduleModule' },
  //  {path: 'shoes',
  //    loadChildren: () => import('./shoesmodule/shoesmodule.module').then(m => m.shoesmodule.module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
