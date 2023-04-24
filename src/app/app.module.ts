import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductComponent } from './component/product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { HamburgerMenuComponent } from './component/hamburger-menu/hamburger-menu.component';
import { ProductCartComponent } from './component/product-cart/product-cart.component'; // Necesario para habilitar las solicitudes HTTP
import { UnregisteredProfileComponent } from './component/unregistered-profile/unregistered-profile.component';
import { RegisteredProfileComponent } from './component/registered-profile/registered-profile.component';
import { RightMenuComponent } from './component/right-menu/right-menu.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { OrderComponent } from './component/order/order.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { CuponComponent } from './component/cupon/cupon.component';
import { UnregisteredDiscountComponent } from './component/unregistered-discount/unregistered-discount.component';

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
    UnregisteredProfileComponent,
    RegisteredProfileComponent,
    MyOrdersComponent,
    OrderComponent,
    CouponsComponent,
    CuponComponent,
    UnregisteredDiscountComponent
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
