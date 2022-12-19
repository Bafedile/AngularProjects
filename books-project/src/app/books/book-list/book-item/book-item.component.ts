import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from '../../books.service';
import { Book } from './book.model';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;
  
  constructor(private booksService:BooksService){}

  selectedBook() {
    this.booksService.bookSelected.emit(this.book);
    
  }
}
