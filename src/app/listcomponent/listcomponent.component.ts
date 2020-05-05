import { Component, OnInit } from '@angular/core';
import { BsService } from 'src/shared-services/behaviourSubject';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.scss']
})
export class ListcomponentComponent implements OnInit {
  product
  cartList
  favouriteList
  constructor(private bsService:BsService) { }

  ngOnInit() {
    this.bsService.favouriteData.subscribe((products)=>{
console.log(products)
      if(products){

  this.cartList=  [...products].filter(product=>product.iscartAdded);
  this.favouriteList= [...products].filter(product=>product.isVisited);

      }
    })

  }

}
