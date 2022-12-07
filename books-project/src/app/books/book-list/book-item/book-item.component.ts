import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();
  
  selectedBook() {
    this.bookSelected.emit();
  }
}
