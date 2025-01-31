import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category/category-edit/category-edit.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

// decorator typescript
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    AboutPageComponent,
    ProductPageComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AdminProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
    SignupComponent,
    SigninComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
