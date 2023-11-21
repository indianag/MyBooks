import { Book } from "./book";

export class BookResponse {
constructor(
    public error:boolean,
    public codigo: number,
    public message: string,
    public books: Book[]){}
}
