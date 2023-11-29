import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
books: Book[];
@Input() datosBook: Book;
@Output() eliminar = new EventEmitter<number>();
@Input() even: Event;


  constructor(private bookService: BooksService){

  }

    eliminarTarjeta(books:Book){

      this.eliminar.emit(books.Id_book);
    }

}



