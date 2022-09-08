import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product(0,"","",0.0, new Date(), new Date());

  constructor(private _service: ProductService) { }

  ngOnInit() {
  }

  onsubmit(): void {
    console.log(this.product);
    /*this._service.addProduct(this.product);
    alert("Product added successfully");
    this.product = new Product(0,"","",0.0);*/

    this._service.addProduct(this.product).subscribe(data => {
        alert("Product added successfully");
        this.product = new Product(0, "", "",0.0, new Date(), new Date());
      },
      error => {
        alert("Problem adding product");
      })
    }

}
