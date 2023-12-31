import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { UpdateBookComponent } from '../page/update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookResponse } from '../models/book-response';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl =  'http://localhost:3000';
  constructor(private toastr: ToastrService,
              private http: HttpClient) { }

 
getAll(id_user: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/books?id_user=${id_user}`);
}
 
getOne(Id_user: number, Id_book: number): Observable<any> {
  console.log(Id_book)
  console.log(Id_user)
  return this.http.get(`${this.apiUrl}/book?id_user=${Id_user}&id_book=${Id_book}`);
}

  add(book: any) {
    console.log(book)
    return this.http.post(`${this.apiUrl}/books`, book);
  }

  edit(book: Book): Observable<any> {
    console.log(book)
    return this.http.put(`${this.apiUrl}/books`, book);
  }

  deleteBook(Id_book: number) {
    console.log(Id_book)
    return this.http.delete(`${this.apiUrl}/books?id_book=${Id_book}`);
    
  }


}
























// public delUsuario(id_number:number)
//   {
//     console.log(id);
//     const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body:{ id:id_number}
//     return this.http.delete(this.url, httpOptions)
//   }












































// getAll(): Book[]{
//   return this.books;
// }

// getOne(id_libro: number): Book | undefined {
//    return this.books.find(book => book.id_book === id_libro);
   
// }
// add(book: Book): void{
//  this.books.push(book);
//  this.toastr.success('nuevo libro añadido correctamente', 'Éxito');
// }
// edit(updateBook: Book): boolean{
//  const index = this.books.findIndex(book => book.id_book === updateBook.id_book);
   
//    if (index !== -1) {
//      this.books[index] = updateBook;
//      this.toastr.success('Libro editado correctamente', 'Éxito');
//      return true; 
//    } this.toastr.error('Libro no encontrado al intentar editar', 'Error');
//    return false;
// } 
// delete(id_book: number): boolean{
//  const index = this.books.findIndex(book => book.id_book === id_book);

//  if (index !== -1) {
//    this.books.splice(index, 1);
   
//    return true;
//  }
//  return false;
// }