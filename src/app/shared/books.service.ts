import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { UpdateBookComponent } from '../page/update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public books: Book[] = [
    {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788491049616-moby-dick.jpg"},
    {id_book: 2, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "https://th.bing.com/th/id/OIP.nwenpbzxiX1rdwotc1lv5QHaK-?rs=1&pid=ImgDetMain"},
    {id_book: 3, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "https://th.bing.com/th/id/OIP.ftuPQTdwts9EpptpuViyFgHaKu?w=1051&h=1522&rs=1&pid=ImgDetMain"},
  ];
  
  getAll(): Book[]{
     return this.books;
  }
 
  getOne(id_libro: number): Book | undefined {
      return this.books.find(book => book.id_book === id_libro);
      
  }
  add(book: Book): void{
    this.books.push(book);
    this.toastr.success('nuevo libro añadido correctamente', 'Éxito');
  }
  edit(updateBook: Book): boolean{
    const index = this.books.findIndex(book => book.id_book === updateBook.id_book);
      
      if (index !== -1) {
        this.books[index] = updateBook;
        this.toastr.success('Libro editado correctamente', 'Éxito');
        return true; 
      } this.toastr.error('Libro no encontrado al intentar editar', 'Error');
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
 
  constructor(private toastr: ToastrService) { }


}
