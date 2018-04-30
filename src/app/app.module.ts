import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {ProductService} from './product.service';
import {MatCheckbox} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AboutComponent,
    CheckoutComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    ProductService,
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
