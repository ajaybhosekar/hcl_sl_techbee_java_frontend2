import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewAllProductsComponent } from './product/view-all-products/view-all-products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    ProductComponent,
    AddProductComponent,
    ViewAllProductsComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
