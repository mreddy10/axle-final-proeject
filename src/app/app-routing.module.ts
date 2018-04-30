import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
