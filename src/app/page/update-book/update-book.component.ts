import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service'
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  bookId: number;
  bookToUpdate: Book = 
    {id_book: 1, id_user: 32, title: "Moby Dick", type: "Ficción náutica", author: "Herman Melville", price: 10, photo: "foto1"};
  
  
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router){
                this.bookId = +this.route.snapshot.paramMap.get('id_book');
                this.bookToUpdate = this.booksService.getOne(this.bookId)
              }
    //funcion para editar un libro//
  updateBook(): void{
    const success = this.booksService.edit(this.bookToUpdate);
    if (success) {
      this.router.navigate(['./books']); // restringir a la pag de libros despues de editar//
    } else {
      alert('No se pudo editar libro.')
    }
  }

  
  ngOnInit(): void {
    
  }
 
  }
