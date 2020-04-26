import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-faviorite',
  templateUrl: './faviorite.component.html',
  styleUrls: ['./faviorite.component.scss']
})
export class FavioriteComponent implements OnInit {
  @Input() cartList:any;
  @Input() favouriteList:any;
  constructor() { }

  ngOnInit() {

   
  }

}
