import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book-list/book-item/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  constructor(private booksService: BooksService) { }
  ngOnInit() {
    console.log("book called");

  }

  deleteBook() {
    this.booksService.deleteBook(this.book);
  }
}
