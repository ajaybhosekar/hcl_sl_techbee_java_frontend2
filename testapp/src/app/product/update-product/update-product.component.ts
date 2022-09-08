import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = new Product(0,"","",0.0, new Date(), new Date());

  constructor(private _activatedRoute: ActivatedRoute, private _service: ProductService, private _router: Router) { }

  ngOnInit() {
    let prodId = 0;
    this._activatedRoute.params.subscribe(data => {
      prodId = data.id;
      console.log("Product Id to be updated: "+prodId);
      this._service.getProduct(prodId).subscribe(response => {
        this.product = response;
      })
    })
  }

  onupdate() {
    this._service.updateProduct(this.product).subscribe(data => {
        alert("Product successfully updated");
        this._router.navigateByUrl("/product/view-all-products")
    }, error => {
      alert("Error occured: "+error.message);
    })
  }

}
