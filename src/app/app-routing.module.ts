import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {
   path:'Category1-comp_path',
   component: Category1CompComponent
  },
  {
   path:'Category2-comp_path',
   component: Category2CompComponent
  },
  {
   path:'Footer-comp_path',
   component: FooterCompComponent
  },
  {
    path:'Main-comp_path',
    component: MainCompComponent
  },
  {
    path:'Menu-comp_path',
    component: MenuCompComponent
  },
  {
    path:'Product1-comp_path',
    component: Product1CompComponent
  },
  {
    path:'Product2-comp_path',
    component: Product2CompComponent
  },
  {
    path:'Product3-comp_path',
    component: Product3CompComponent
  },
  {
    path:'Product4-comp_path',
    component: Product4CompComponent
  },
  {
    path:'Product5-comp_path',
    component: Product5CompComponent
  },
  {
    path:'Product6-comp_path',
    component: Product6CompComponent
  },
  {
    path:'Product7-comp_path',
    component: Product7CompComponent
  },
  {
    path:'Product8-comp_path',
    component: Product8CompComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
