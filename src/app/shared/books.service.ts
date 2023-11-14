import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { UpdateBookComponent } from '../page/update-book/update-book.component';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public books: Book[] = [
    {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"},
    {id_book: 2, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"},
    {id_book: 3, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"},
  ];
  
  getAll(): Book[]{
     return this.books;
  }
 
  getOne(id_libro: number): Book | undefined {
      return this.books.find(book => book.id_book === id_libro);
  }
  add(book: Book): void{
    this.books.push(book);
  }
  edit(updateBook: Book): boolean{
    const index = this.books.findIndex(book => book.id_book === updateBook.id_book);
      
      if (index !== -1) {
        this.books[index] = updateBook;
        return true;
      }
      return false;
  } 
  delete(id_book: number): boolean{
    const index = this.books.findIndex(book => book.id_book === id_book);

    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
 
  constructor() { }


}
