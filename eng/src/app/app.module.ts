import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CategorysComponent } from './categorys/categorys.component';
import { CardComponent } from './card/card.component';
import { SerComponent } from './ser/ser.component';
import { SercardComponent } from './sercard/sercard.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    CategorysComponent,
    CardComponent,
    SerComponent,
    SercardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
