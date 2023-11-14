import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CodigoPipe } from 'src/app/pipes/codigo.pipe';
import { FormBookService } from '../..//shared/form-book.service';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  searchId:number;   //variable para almacenar el ID de busqueda//
  searchResult: Book;    //variable para almacenar el resultado de busqueda//
  newBook: Book = new Book();

  @Input() buscarLibro: Book = 
    {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"}


  constructor(public formBookService: FormBookService,
    private route: ActivatedRoute,
    private booksService: BooksService) { }


  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  addBook() {
    this.books.push(this.newBook);
    this.newBook = new Book();
  }
  // eliminarBook(book: any) {
  //   const index = this.books.indexOf(book);
  //   if (index !== -1) {
  //     this.books.splice(index, 1);
  //   }
  // }
// funcion para buscar libros segun el ID//
  search(): void{
    if(this.searchId){
      this.searchResult = this.booksService.getOne(this.searchId);
    } else {
      this.searchResult = null;   // reiniciar el resultado si no hay ID de busqueda
    }
  }
  //logica para mostrar todos los libros o el resultado de busqueda//
  getDisplayedBooks(): Book[]{
    return this.searchResult ? [this.searchResult] : this.books;
  }

  //funcion para eliminar un libro//+
  deleteBook(id:number): void{
    if(confirm('¿Estás seguro de que deseas eliminar este libro?')){
      const success = this.booksService.delete(id);
      if( success){
        //actualizar la lista de libros despues de la eliminacion//
        this.books = this.booksService.getAll();
        // reiniciar la busqueda//
        this.searchResult = null;
      } else{
        alert('No se pudo eliminar el libro');
      }
    }
  }
}