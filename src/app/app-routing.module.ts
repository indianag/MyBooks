import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/page/home/home.component';
import { RegisterComponent } from '../app/page/register/register.component';
import { ProfileComponent } from '../app/page/profile/profile.component';
import { BooksComponent } from '../app/page/books/books.component';
import { UpdateBookComponent } from'../app/page/update-book/update-book.component';
import { AddBookComponent } from '../app/page/add-book/add-book.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "profiler", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "updateBook", component: UpdateBookComponent},
  {path: "addBook", component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
