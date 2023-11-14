import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() datosBook: Book= {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"};
  @Output() eliminar = new EventEmitter<void>();
  @Input() even: Event;

    eliminarTarjeta(){
      this.eliminar.emit();
    }
}






// export class CardComponent {
//   @Input() datosBook: Book;
//   @Output() eliminar = new EventEmitter<void>();
//   @Input() even: Event;

//     eliminarTarjeta(){
//       this.eliminar.emit();
//     }
// }