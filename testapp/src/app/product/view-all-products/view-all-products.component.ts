import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private _service: ProductService) { }

  ngOnInit() {
    //this.products = this._service.getAllProducts();  
    this._service.getAllProducts().subscribe(data => {
        this.products = data;
        console.log(data);
    }, error => {
      alert(error.message);
    });
  }

}
