import { Component, OnInit } from '@angular/core';
import { BooksService } from './books/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'books-project';
  selectedHeader: string = "book-list";

  constructor(private booksService: BooksService,private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/books']);
    this.booksService.headerSelected.subscribe((header)=>this.selectedHeader = header);
  }
}
