import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBookService {
  private librosSubject = new BehaviorSubject<any[]>([]);
  libros$ = this.librosSubject.asObservable();

    agregarLibro(libro:any){
      const libros = this.librosSubject.value;
      libros.push(libro);
      this.librosSubject.next(libros);
    }
  constructor() { }
}
