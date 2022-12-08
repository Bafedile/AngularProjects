import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from './book-item/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books: Book[] ;
  @Input() headerSelected: string;


  constructor(private booksService: BooksService){}

  ngOnInit(){
    this.books = this.booksService.getBooks();
    this.booksService.booksEmitter.subscribe((books:Book[])=>{this.books = books});
  }


  


}
