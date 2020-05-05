
import {ProductinfoComponent} from './productinfo/productinfo.component';
import { HomeComponent } from './home/home.component';
import {OrderComponent} from './order/order.component';
import {OrderlisComponent} from './orderlis/orderlis.component';
import {MenproductComponent} from './menproduct/menproduct.component';
import {WomensproductComponent} from './womensproduct/womensproduct.component';
import {ShoesComponent} from './shoesmodule/shoes/shoes.component';
import {JewlearyComponent} from './jewleary/jewleary.component';
import {CheppalesComponent} from './cheppales/cheppales.component';
import { Routes } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'productinfo', component:ProductinfoComponent},
    {path:'order', component:OrderComponent},
    {path:'orderlist',component:OrderlisComponent},
    {path:'men',component:MenproductComponent},
    {path :'women',component:MenproductComponent},
    {path :"chapals" , component:CheppalesComponent},
    {path:'jewelery', component:JewlearyComponent},
    {path:'list',component:ListcomponentComponent},
   // {path:'shoes',component:ShoesComponent}
   { path: 'shoes', loadChildren: './shoesmodule/shoesmodule.module#ShoesmoduleModule' },
    //  {path: 'shoes',
    //    loadChildren: () => import('./shoesmodule/shoesmodule.module').then(m => m.shoesmodule.module)}
  ];