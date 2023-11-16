import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CodigoPipe } from 'src/app/pipes/codigo.pipe';
import { FormBookService } from '../..//shared/form-book.service';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/shared/local-storage.service';


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



  constructor(public formBookService: FormBookService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private toastr: ToastrService,
    private localStoregeSvc: LocalStorageService) {
     this.books = this.booksService.getAll();
    }


  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  addBook() {
    this.books.push(this.newBook);
    this.newBook = new Book();
    
  }
  searchBookById(){
    this.books=[];
    if(this.searchId){   //usar el servicio para obtener el libro por el id//
      const foundBook = 
      this.booksService.getOne(this.searchId);
      if (foundBook){        //si se encuentra el libro, agregalo a la lista de resultados
        this.books.push(foundBook);
    } else {      //muestro los libros si no se proporciona un id o no se encuentra el id//
      this.books = this.booksService.getAll();
      this.toastr.warning('ID de libro no encontrado', 'Advertencia');
    }
    }
  }

  //funcion para eliminar un libro//
  deleteBook(id:number){
    if(confirm('¿Estás seguro de que deseas eliminar este libro?')){
      const success = this.booksService.delete(id);
      if(success){
        //actualizar la lista de libros despues de la eliminacion//
        this.booksService.getOne(id);
        // reiniciar la busqueda//
      
      } else{
        alert('No se pudo eliminar el libro');
      }
    }
  }
  // addNewBook(){  //Metodo para notificar la adicion de un nuevo libro//
  //   this.toastr.success('nuevo libro añadido correctamente', 'Éxito');
  // }
  // editBookSuccess(){   // Metodo para notificar la edicion exitosa de un libro//
  //   this.toastr.success('Libro editado correctamente', 'Éxito');
  // }
  // editBookNotFound(){    //Metodo para notificar que el libro no fue encontrado al editar//
  //   this.toastr.error('Libro no encontrado al intentar editar', 'Error');
  // }
  // idNotFound(){  ///Metodo para notificar que el ID no existe//
  //   this.toastr.warning('ID de libro no encontrado', 'Advertencia');
  // }
}


