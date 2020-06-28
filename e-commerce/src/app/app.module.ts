import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CardsComponent } from './pages/home/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricComponent,
    ShoppingCartComponent,
    DetailsComponent,
    LoginComponent,
    MenuComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
