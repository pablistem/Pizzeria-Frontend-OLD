import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductComponent } from './component/menu/product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './component/header/right-menu/shopping-cart/shopping-cart.component';
import { HamburgerMenuComponent } from './component/header/left-menu/hamburger-menu/hamburger-menu.component';
import { ProductCartComponent } from './component/header/right-menu/shopping-cart/product-cart/product-cart.component';
import { RightMenuComponent } from './component/header/right-menu/right-menu.component';
import { LeftMenuComponent } from './component/header/left-menu/left-menu.component';
import { MyOrdersComponent } from './component/header/left-menu/my-orders/my-orders.component';
import { OrderComponent } from './component/header/left-menu/my-orders/order/order.component';
import { CouponsComponent } from './component/header/left-menu/coupons/coupons.component';
import { CuponComponent } from './component/header/left-menu/coupons/cupon/cupon.component';
import { ProfileComponent } from './component/header/left-menu/profile/profile.component';
import { DiscountComponent } from './component/header/left-menu/discount/discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    ShoppingCartComponent,
    HamburgerMenuComponent,
    ProductCartComponent,
    RightMenuComponent,
    LeftMenuComponent,
    MyOrdersComponent,
    OrderComponent,
    CouponsComponent,
    CuponComponent,
    ProfileComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
