import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component/menu/product/product.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/auth/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { BackofficeComponent } from './component/backoffice/backoffice.component';
import { CategoryBOComponent } from './component/backoffice/category-bo/category-bo.component';
import { ProductoBOComponent } from './component/backoffice/producto-bo/producto-bo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearProductoComponent } from './component/backoffice/producto-bo/crear-producto/crear-producto.component';
import { ModalCuponComponent } from './component/header/left-menu/coupons/cupon/modal-cupon/modal-cupon.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { EliminarProductoComponent } from './component/backoffice/producto-bo/eliminar-producto/eliminar-producto.component';
import { ActualizarProductoComponent } from './component/backoffice/producto-bo/actualizar-producto/actualizar-producto.component';
import { CategoriasComponent } from './component/home/categorias/categorias.component';
import { CrearCategoriaComponent } from './component/backoffice/category-bo/crear-categoria/crear-categoria.component';

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
    DiscountComponent,
    BackofficeComponent,
    CategoryBOComponent,
    ProductoBOComponent,
    CrearProductoComponent,
    ModalCuponComponent,
    EliminarProductoComponent,
    ActualizarProductoComponent,
    CategoriasComponent,
    CrearCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
