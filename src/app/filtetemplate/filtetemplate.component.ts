import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-filtetemplate',
  templateUrl: './filtetemplate.component.html',
  styleUrls: ['./filtetemplate.component.scss']
})
export class FiltetemplateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Min: ['', Validators.required],
      Max: ['', Validators.required],
      Tshirts: ['', Validators.required],
      Jeans: ['', Validators.required],
      Shirts: ['', Validators.required],
      shorts: ['', Validators.required]
  });
  }
  submit(eve){
    console.log(eve);

  }

}
