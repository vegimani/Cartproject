import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl } from '@angular/forms';
import {checkboxList} from '../data';
@Component({
  selector: 'app-filtetemplate',
  templateUrl: './filtetemplate.component.html',
  styleUrls: ['./filtetemplate.component.scss']
})
export class FiltetemplateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  //checboxlist :any;
  @Input() checboxlist :any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Min: ['', Validators.required],
      Max: ['', Validators.required],
      Tshirts: ['', Validators.required],
      Jeans: ['', Validators.required],
      Shirts: ['', Validators.required],
      shorts: ['', Validators.required],
      skills: new FormArray([
        new FormControl(false),
        new FormControl(false),
      ])
  });
 // this.checboxlist =checkboxList;
  }
  submit(filters){
    let skills= filters.skills.map((selected, i) => {
      return {
        // id: this.checboxlist.skills[i].id,
       selected:selected,
        name:this.checboxlist[i]
     }
    });
  
  Object.keys(filters).forEach(key => filters[key] === '' || filters[key] ==null ? delete filters[key] : key);
  //filters['firstName']='Mani';
  filters["skills"]=skills.filter(x=>x.selected);
  //filters["skills"]=[{id:1,name:'CSS'}]
  

  }
 
  get skills() {
    return this.registerForm.get('skills');
  };
  



}
