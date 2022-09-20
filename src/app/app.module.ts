import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuCompComponent } from './menu-comp/menu-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { Category1CompComponent } from './category1-comp/category1-comp.component';
import { Category2CompComponent } from './category2-comp/category2-comp.component';
import { Product1CompComponent } from './product1-comp/product1-comp.component';
import { Product2CompComponent } from './product2-comp/product2-comp.component';
import { Product3CompComponent } from './product3-comp/product3-comp.component';
import { Product4CompComponent } from './product4-comp/product4-comp.component';
import { Product5CompComponent } from './product5-comp/product5-comp.component';
import { Product6CompComponent } from './product6-comp/product6-comp.component';
import { Product7CompComponent } from './product7-comp/product7-comp.component';
import { Product8CompComponent } from './product8-comp/product8-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCompComponent,
    FooterCompComponent,
    MainCompComponent,
    Category1CompComponent,
    Category2CompComponent,
    Product1CompComponent,
    Product2CompComponent,
    Product3CompComponent,
    Product4CompComponent,
    Product5CompComponent,
    Product6CompComponent,
    Product7CompComponent,
    Product8CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
