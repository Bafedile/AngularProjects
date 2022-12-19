import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book-list/book-item/book.model';
import { BooksService } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  // providers: [BooksService]
})
export class BooksComponent implements OnInit {
  // book: Book;
  headerSelected: string = 'book-list';

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.headerSelected.subscribe((header) => this.headerSelected = header);
    // this.booksService.bookSelected.subscribe((book: Book) => { this.book = book });
  }

}
