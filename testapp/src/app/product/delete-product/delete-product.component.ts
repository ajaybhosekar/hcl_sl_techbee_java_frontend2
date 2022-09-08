import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: Product = new Product(0,"","",0.0, new Date(), new Date());
  prodId: number = 0;

  constructor(private _activatedRoute: ActivatedRoute, private _service: ProductService, private _router: Router) { }

  ngOnInit() {
    
    this._activatedRoute.params.subscribe(data => {
      this.prodId = data.id;
      console.log("Product Id to be deleted: "+this.prodId);
     
      this._service.deleteProduct(this.prodId).subscribe(data => {
        alert("Product successfully deleted");
        this._router.navigateByUrl("/product/view-all-products")
    }, error => {
      alert("Error occured: "+error.message);
    })
    })
  }

  

}
