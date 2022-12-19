import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from './book-item/book.model';

import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Input() headerSelected: string;
  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.booksService.booksEmitter.subscribe((books: Book[]) => { this.books = books });
  }

  loadToAddBook() {
    this.router.navigate(['/add_book']);
  }



}
