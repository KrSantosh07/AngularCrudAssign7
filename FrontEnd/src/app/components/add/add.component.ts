import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
    price: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    quantity: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    category: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
    description: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
    image: new FormControl('', [Validators.required])
  })
  get formData() {
    return this.myForm.controls;
  }
  myData = { name: '', price: '', quantity: '', category: '', description: '', img: '' }
  constructor(private pser: ProductService, private router: Router) { }

  ngOnInit(): void { }
  postdata() {
    this.pser.postData(this.myData)
      .subscribe(res => {
        if (res) {
          alert("Data Added");
          this.router.navigate(['/']);
        }
      })
  }
}
