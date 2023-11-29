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
      if (!resp.books) {
        // Mostrar el libro encontrado, puedes asignarlo a una variable en tu componente
        this.books = this.books.filter(book => book.Id_book == this.searchId);
        console.log(this.books)
        console.log(this.books)
        // Actualizar la lista de libros solo si estamos mostrando un solo libro
        } else {
        console.log('Libro no encontrado.' )
          this.booksService.getAll(this.userService.user.Id_user).subscribe((Resp:BookResponse) => {
            this.books = resp.books;
      })
    }(error) => {
      console.error('Error al buscar el libro por ID:', error);
    }
})
}
  


loadBooks() {
  this.booksService.getAll(this.userService.user.Id_user).subscribe(
    (resp: BookResponse) => {
      // Mostrar solo el libro encontrado si estamos en el modo de visualización de un solo libro
      this.books = this.showSingleBook ? [this.singleBook] : (resp.books || []);
    },
    (error) => {
      console.error('Error al obtener libros:', error);
    }
  );
}


deleteBook(): void {
  this.booksService.delete(this.searchId).subscribe(
    response => {
      console.log('Libro eliminado correctamente', response);
      // Puedes realizar alguna acción adicional si es necesario
    },
    error => {
      console.error('Error al eliminar el libro', error);
      // Manejar el error según tus necesidades
    }
  );
}




































































  // deleteBook(searchId: number) {
  //   this.booksService.delete(searchId).subscribe(
  //     () => {
  //       console.log(`${searchId} eliminado correctamente`);
  
  //       // Eliminar el libro de la lista actual
  //       this.books = this.books.filter(book => book.Id_book !== searchId);
  
  //       // Mostrar los libros restantes
  //       this.booksService.getOne(this.userService.user.Id_user, this.searchId).subscribe((Resp:BookResponse) => {
  //         this.books = Resp.books;
  //         });
  //     },
  //     (error) => {
  //       console.error('Error al eliminar el libro:', error);
  //     }
  //   );
  // }
  
  // searchBookById() {
  //   this.booksService.getOne(this.userService.user.Id_user, this.searchId).subscribe(
  //     (resp: BookResponse) => {
  //       if (resp.books) {
  //         console.log('Libro encontrado:', resp.books);
  //         // Mostrar el libro encontrado, puedes asignarlo a una variable en tu componente
  //         this.singleBook = resp.books;
  //         this.showSingleBook = true;
  //       } else {
  //         console.log('Libro no encontrado.');
  //         this.loadBooks(); // Mostrar todos los libros después de buscar por ID si no se encuentra
  //         this.showSingleBook = false;
  //       }
  //     },
  //     (error) => {
  //       console.error('Error al buscar el libro por ID:', error);
  //     }
  //   );
  // }
  




}

