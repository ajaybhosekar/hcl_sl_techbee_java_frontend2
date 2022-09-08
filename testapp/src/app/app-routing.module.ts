import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ViewAllProductsComponent } from './product/view-all-products/view-all-products.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {'path': 'home', component: HomeComponent},
  {'path': 'about', component: AboutComponent},
  {'path': 'services', component: ServicesComponent},
  {'path': 'team', component: TeamComponent},
  {'path': 'contact', component: ContactComponent},
  {'path': 'product', component: ProductComponent, 
    children: [
      {'path': 'add-product', component: AddProductComponent},
      {'path': 'view-all-products', component: ViewAllProductsComponent},
      {'path': 'update/:id', component: UpdateProductComponent},
      {'path': 'delete/:id', component: DeleteProductComponent},
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   
