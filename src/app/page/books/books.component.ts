import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CodigoPipe } from 'src/app/pipes/codigo.pipe';
import { FormBookService } from '../..//shared/form-book.service';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookResponse } from 'src/app/models/book-response';
import { UsuarioService } from 'src/app/shared/usuario.service';






@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]; 
  searchId:number;   //variable para almacenar el ID de busqueda//  
  searcheBook: Book[]; //variable para almacenar el resultado de busqueda//
  newBook: Book = new Book();
  Id_user:number;
  
  singleBook:any;
  showSingleBook:any;



  constructor(public formBookService: FormBookService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private toastr: ToastrService,
    private userService: UsuarioService) {
     
      this.booksService.getAll(this.userService.user.Id_user).subscribe((Resp:BookResponse) => {
        this.books = Resp.books;
        });
    }


  ngOnInit(): void {
  // this.booksService.getAll(this.id_user).subscribe((Resp:BookResponse) => {
  //   this.books = Resp.books;
  //   });

  }


searchBookById() {
  this.booksService.getOne(this.userService.user.Id_user, this.searchId).subscribe(
    (resp: BookResponse) => {
      console.log(this.userService.user.Id_user)
      console.log(this.searchId)
      if (resp.error) {
        this.booksService.getAll(this.userService.user.Id_user).subscribe((resp:BookResponse) => {
          this.books = resp.books;
           
          })
        // Mostrar el libro encontrado, puedes asignarlo a una variable en tu componente
   
        this.toastr.error(resp.message);
        
        // Actualizar la lista de libros solo si estamos mostrando un solo libro
        } else {
          this.toastr.success(resp.message);
               
          this.books = resp.books;
          console.log(resp.books)
          console.log(this.books)
      //     
    }(error) => {
      console.error('Error al buscar el libro por ID:', error);
    }
})
}
  


deleteBook(Id_book: number): void {
  this.booksService.deleteBook(Id_book).subscribe(
    response => {
      console.log('Libro eliminado correctamente', response);
      
      // Después de eliminar, obtenemos la lista actualizada de libros
      this.booksService.getAll(this.userService.user.Id_user).subscribe(
        response => {
          // Actualizamos la lista de libros en el componente
          this.books = response.books;
        },
        error => {
          console.error('Error al obtener la lista actualizada de libros', error);
          // Manejar el error según tus necesidades
        }
      );

    },
    error => {
      console.error('Error al eliminar el libro', error);
      // Manejar el error según tus necesidades
    }
  );
}

}

