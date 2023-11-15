import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BooksComponent } from './page/books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodigoPipe } from './pipes/codigo.pipe';
import { CardComponent } from './component/card/card.component';
import { UpdateBookComponent } from './page/update-book/update-book.component';
import { AddBookComponent } from './page/add-book/add-book.component';
import { FormBookService } from './shared/form-book.service';
import { BooksService } from './shared/books.service';
import { LoginComponent } from './page/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    CodigoPipe,
    CardComponent,
    UpdateBookComponent,
    AddBookComponent,
    LoginComponent,
    FormLoginComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBookService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
