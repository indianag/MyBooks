import { Component } from '@angular/core';
import { FormBookService } from '../../shared/form-book.service'
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { BookResponse } from 'src/app/models/book-response';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book[];
  // nuevoLibro: Book = //inicializar los atributos del nuevo libro//
  //   {Id_book: 1, Id_user: 32, title: "Moby Dick", type: "Tapa Blanda", author: "Herman Melville", price: 10, photo: "foto1"};

  constructor(private booksService: BooksService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UsuarioService) { }

  //funcion para agregar un nuevo libro//
  addBook(title: string, type: string, author: string, price: number, photo: string) {

    let nuevoLibro = new Book(
      title,
      type,
      author,
      price,
      photo,
      this.userService.user.Id_user

    );
    this.booksService.add(nuevoLibro).subscribe((resp: BookResponse) => {
      console.log(resp);
      console.log(nuevoLibro.Id_user);
      console.log(this.userService.user.Id_user);
      
      if (!resp.error) {
        this.toastr.success(resp.message);
       
        this.router.navigate(['/books']);
      } else {
        this.toastr.error(resp.message);
      }
    });
  
}


}





//         // Actualizar la lista de libros después de agregar el nuevo libro
//         this.booksService.getAll(this.userService.user.Id_user).subscribe(
//           (booksResponse: any) => {
//             this.book = booksResponse.books;
//           },
//           (error: any) => {
//             console.error('Error al obtener la lista actualizada de libros', error);
//             // Manejar el error según tus necesidades
//           }
//         );
//       },
//       (error: any) => {
//         console.error('Error al agregar el libro', error);
//         // Manejar el error según tus necesidades
//       }
//     );

//     // Redirigir a la página de libros después de agregar
//     this.router.navigate(['/books']);
//   }
// }}
