import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(private pser: ProductService, private route: ActivatedRoute, private router: Router) { }
  myData: any;
  id: any;
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
}
