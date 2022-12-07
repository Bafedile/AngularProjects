import { Component,Input } from '@angular/core';
import { Book } from './book-list/book-item/book.model';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() book:Book;
  @Input() bookAdded:Book;
  @Input() books:Book[] = [];
  @Input() headerSelected:string = "book-list";
}
