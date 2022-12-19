import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Book } from '../book-list/book-item/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book: Book = {title:'',author:'',description:'',imagePath:''};


  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
   
    this.booksService.bookSelected.subscribe((book) => { this.book = book });
  }
  

  deleteBook() {
    this.booksService.deleteBook(this.book);
    // this.booksService.bookSelected.subscribe((book)=>{this.book = book});
  }
}
