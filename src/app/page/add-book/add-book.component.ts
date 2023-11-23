import { Component } from '@angular/core';
import { FormBookService } from '../../shared/form-book.service'
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { BookResponse } from 'src/app/models/book-response';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book : Book[];
  nuevoLibro: Book = //inicializar los atributos del nuevo libro//
    {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"};

  constructor(private booksService: BooksService,
              private router: Router,
              private toastr: ToastrService){}

  //funcion para agregar un nuevo libro//

  addBook(): void{
    this.booksService.add(this.nuevoLibro).subscribe((resp:BookResponse) => {
      console.log(resp)  
      this.book=resp.books
      
    });
    this.router.navigate(['/books']); //Redirigir a la pagina de libros despues de agregar.
    
  }
}
