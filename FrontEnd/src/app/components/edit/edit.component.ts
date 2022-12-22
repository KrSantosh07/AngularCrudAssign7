import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  id: any;
  constructor(private pser: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(par => {
      this.id = par['id'];
      this.pser.getProductById(this.id)
        .subscribe(res => {
          if (res) {
            this.myData = { name: res.name, price: res.price, quantity: res.quantity, category: res.category, description: res.description, img: res.img }
          }
        })
    })
  }

  updatedata() {
    this.pser.updateData(this.myData, this.id)
      .subscribe(res => {
        if (res) {
          alert("Product Updated");
          this.router.navigate(['/']);
        }
      })
  }
}
