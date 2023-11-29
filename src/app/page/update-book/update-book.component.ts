import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service'
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookResponse } from 'src/app/models/book-response';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  book:Book[];
  bookId: number;
  bookToUpdate: Book = 
    {Id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"};
  
  
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router){
              }
    //funcion para editar un libro//
  updateBook(): void{
    this.booksService.edit(this.bookToUpdate).subscribe(
      (resp: BookResponse) => {
        this.router.navigate(['./books']); // redirigir a la página de libros después de editar
      },
      (error) => {
        console.error('Error al editar el libro', error);
        alert('No se pudo editar el libro.');
      }
    );
  }

  
  ngOnInit(): void {
    
  }
 
  }









  // updateBook(){
  //   const success = this.booksService.edit(this.bookToUpdate);
  //   if (success) {
  //     this.router.navigate(['./books']); // redirigir a la pag de libros despues de editar//
  //   } else {
  //     alert('No se pudo editar libro.')
  //   }
  // }
