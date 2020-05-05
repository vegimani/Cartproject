import { Component, OnInit, Output,EventEmitter,ViewChild } from '@angular/core';
import { AppService } from '../appservice';
import {urls} from '../urls';
import {BsService} from '../../shared-services/behaviourSubject';
import { Router ,NavigationStart} from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-menproduct',
  templateUrl: './menproduct.component.html',
  styleUrls: ['./menproduct.component.scss']
})
export class MenproductComponent implements OnInit {

  url :any;
  products:any;
  uniqueArr:any;
  filters:any;
  @Output() data =new EventEmitter<any>(null);
  @ViewChild(ProductsComponent) productsComponent: ProductsComponent;

  constructor(private product:AppService,private bsService:BsService,private router:Router) {
    
      }

  ngOnInit() {
    if(this.router.url == '/men')
 this.url = urls.mensproduct;
  this.getproductlist();
  }
  getproductlist(){
    this.product.get(this.url.get).subscribe( (res)=>{
      this.products=res;
      this.products.map((product)=>{
        let myProduct=product;
        product.isVisited=false;
        product.iscartAdded=false;
        return product
      })

      this.uniqueArr = [... new Set(this.products.map(data => data.type))]
     // console.log(uniqueArr)
      
    },()=>{})
  }
  filterdata($event){
this.filters =$event;
this.productsComponent.filterUserList(this.filters,this.products)
  }

  addToCart(product:any,type){

    if(type=='favourite'){
      product.isVisited=!product.isVisited
    }
    else {
      if(type=='cart')
      product.iscartAdded=!product.iscartAdded;
    }
  
    
   
    this.bsService.updateFavouriteData(this.products);
  }

  openSelectedProduct(product:any){
    this.bsService.updateSelectedProduct(product);
    this.router.navigateByUrl('/productinfo')
  }
}
