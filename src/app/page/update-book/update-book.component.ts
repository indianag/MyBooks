import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service'
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookResponse } from 'src/app/models/book-response';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  book:Book[];
  // bookId: number;
  // bookToUpdate: Book = 
  //   {Id_book: 1, Id_user: 32, title: "Moby Dick", type: "Tapa Blanda", author: "Herman Melville", price: 10, photo: "foto1"};
  
  
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router,
              private userService: UsuarioService){
              }
    //funcion para editar un libro//
  updateBook(title: string, type: string, author: string, price: number, photo: string, Id_book: number,){
    let nuevoLibro = new Book(
      title,
      type,
      author,
      price,
      photo,
      Id_book,
      this.userService.user.Id_user

    );
    this.booksService.edit(nuevoLibro).subscribe(
      (resp: BookResponse) => {
        if (!resp.error) {
          this.toastr.success(resp.message);
          this.router.navigate(['/books']);
        } else {
          this.toastr.error(resp.message);
        }
      }
 
  )}

  
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
