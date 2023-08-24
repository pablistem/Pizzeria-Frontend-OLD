import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { BackofficeComponent } from './component/backoffice/backoffice.component';
import { ActualizarCategoriaComponent } from './component/backoffice/category-bo/actualizar-categoria/actualizar-categoria.component';
import { CategoryBOComponent } from './component/backoffice/category-bo/category-bo.component';
import { CrearCategoriaComponent } from './component/backoffice/category-bo/crear-categoria/crear-categoria.component';
import { EliminarCategoriaComponent } from './component/backoffice/category-bo/eliminar-categoria/eliminar-categoria.component';
import { ActualizarProductoComponent } from './component/backoffice/producto-bo/actualizar-producto/actualizar-producto.component';
import { CrearProductoComponent } from './component/backoffice/producto-bo/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './component/backoffice/producto-bo/eliminar-producto/eliminar-producto.component';
import { ProductoBOComponent } from './component/backoffice/producto-bo/producto-bo.component';
import { HeaderComponent } from './component/header/header.component';
import { CouponsComponent } from './component/header/left-menu/coupons/coupons.component';
import { CuponComponent } from './component/header/left-menu/coupons/cupon/cupon.component';
import { ModalCuponComponent } from './component/header/left-menu/coupons/cupon/modal-cupon/modal-cupon.component';
import { DiscountComponent } from './component/header/left-menu/discount/discount.component';
import { HamburgerMenuComponent } from './component/header/left-menu/hamburger-menu/hamburger-menu.component';
import { LeftMenuComponent } from './component/header/left-menu/left-menu.component';
import { MyOrdersComponent } from './component/header/left-menu/my-orders/my-orders.component';
import { OrderComponent } from './component/header/left-menu/my-orders/order/order.component';
import { ProfileComponent } from './component/header/left-menu/profile/profile.component';
import { RightMenuComponent } from './component/header/right-menu/right-menu.component';
import { ProductCartComponent } from './component/header/right-menu/shopping-cart/product-cart/product-cart.component';
import { ShoppingCartComponent } from './component/header/right-menu/shopping-cart/shopping-cart.component';
import { CategoriasComponent } from './component/home/categorias/categorias.component';
import { HomeComponent } from './component/home/home.component';
import { RecomendacionesComponent } from './component/home/recomendaciones/recomendaciones.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MenuComponent } from './component/home/menu/menu.component';
import { ProductoComponent } from './component/home/producto/producto.component';
import { DetallesComponent } from './component/home/detalles/detalles.component';
import { ModalEditarPerfilComponent } from './component/header/left-menu/profile/modal-editar-perfil/modal-editar-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
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
    ActualizarCategoriaComponent,
    EliminarCategoriaComponent,
    RecomendacionesComponent,
    MenuComponent,
    ProductoComponent,
    DetallesComponent,
    ModalEditarPerfilComponent
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
