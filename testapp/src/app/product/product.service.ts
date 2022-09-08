import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(101, '43 inch LED TV', 'Samsung', 40000.0, new Date(), new Date()),
    new Product(102, '50 inch LED TV', 'Samsung', 55000.0, new Date(), new Date()),
    new Product(103, '1.5 Ton Inverter AC', 'Samsung', 60000.0, new Date(), new Date()),
    new Product(104, '2 Ton Inverter AC', 'LG', 70000.0, new Date(), new Date()),
    new Product(105, '18L Refrigerator', 'LG', 35000.0, new Date(), new Date()),

  ]

  constructor(private _httpClient: HttpClient) { }

  /*getAllProducts(): Product[] {
    return this.products;
  }  
  */

  getAllProducts(): Observable<Product[]> {
    let url: string = "http://localhost:9090/api/products";
    return this._httpClient.get<Product[]>(url).pipe(map(response => response));
  }  

  /*
  addProduct(product: Product): Product {
    this.products.push(product);
    return product;   
  }*/

  addProduct(product: Product): Observable<Product> {
    let url: string = "http://localhost:9090/api/products";
    return this._httpClient.post<Product>(url, product).pipe(map(response => response));
  }

  getProduct(productId: number): Observable<Product> {
    let url = "http://localhost:9090/api/products/"+productId;
    return this._httpClient.get<Product>(url).pipe(map(response => response));
  }

  updateProduct(product: Product): Observable<Product> {
    let url: string = "http://localhost:9090/api/products/"+product.prodId;
    return this._httpClient.put<Product>(url, product).pipe(map(response => response));
  }

  deleteProduct(productId: number): Observable<string> {
    let url: string = "http://localhost:9090/api/products/"+productId;
    return this._httpClient.delete<string>(url);//.pipe(map(response => response));
  }
 }
