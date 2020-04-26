import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {FavioriteComponent} from './faviorite/faviorite.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MenproductComponent} from './menproduct/menproduct.component';
import {OrderComponent} from './order/order.component';
import {OrderlisComponent} from './orderlis/orderlis.component';
import {ProductinfoComponent} from './productinfo/productinfo.component';
import {ProductsComponent} from './products/products.component';
import {urls} from './urls';
import {AppService} from './appservice';
import {AppRoutingModule} from './app-routing.module';
import {AddtocartComponent} from './addtocart/addtocart.component'; 
import { CarouselModule } from 'ngx-bootstrap';
import {BsService} from '../shared-services/behaviourSubject';
import {HttpClientModule} from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap';
import { FiltetemplateComponent } from './filtetemplate/filtetemplate.component';
import { WomensproductComponent } from './womensproduct/womensproduct.component';
import { JewlearyComponent } from './jewleary/jewleary.component';
import { ShoesComponent } from './shoesmodule/shoes/shoes.component';
import { CheppalesComponent } from './cheppales/cheppales.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,CarouselModule.forRoot(),HttpClientModule,TabsModule.forRoot(),ReactiveFormsModule,FormsModule ],
  declarations: [ AppComponent,CarouselComponent,FavioriteComponent,HeaderComponent,HomeComponent, MenproductComponent,OrderComponent,
    OrderlisComponent,ProductinfoComponent,ProductsComponent,AddtocartComponent, FiltetemplateComponent, WomensproductComponent, JewlearyComponent, ShoesComponent, CheppalesComponent],
  bootstrap:    [ AppComponent ],
  providers:[AppService,BsService]
})
export class AppModule { }