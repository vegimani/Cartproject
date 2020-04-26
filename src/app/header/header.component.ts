import { Component, OnInit } from '@angular/core';
import {headerTabs} from './headerTabs';
import {BsService} from '../../shared-services/behaviourSubject'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMenu:any;

  cartList:any=[];
  favouriteList:any=[];
  constructor(private bsService:BsService) { }

  ngOnInit() {
      this.headerMenu=headerTabs;
      this.bsService.favouriteData.subscribe((products)=>{

        if(products){
  
    this.cartList=  [...products].filter(product=>product.iscartAdded);
    this.favouriteList= [...products].filter(product=>product.isVisited);

        }
      })

  }

}
