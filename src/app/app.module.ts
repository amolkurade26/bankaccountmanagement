import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { PrefixPipe } from './custompipes/prefix.pipe';
import { OrderbyPipe } from './custompipes/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LearningComponent,
    CustomerAccountComponent,
    AccountCardComponent,
    PrefixPipe,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
