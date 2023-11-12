import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CodigoPipe } from 'src/app/pipes/codigo.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books:Book[] = [
    new Book(1, 32, "Moby Dick", "Ficción náutica", "Herman Melville", 10, "foto1"),
    new Book(2, 33, "Don Quijote de la Mancha", "Novela de aventuras", "Miguel de Cervantes", 20, "foto2"),
    new Book(3, 34, "cien años de soledad", "Realismo Mágico", "Gabriel Garcia", 50, "foto3"),
  ];
  
  newBook: Book = new Book();
  addBook(){
    this.books.push(this.newBook);
    this.newBook = new Book();
  }
  eliminarBook(book:any){
    const index = this.books.indexOf(book);
    if(index !== -1) {
      this.books.splice(index, 1);
    }
  }

}
