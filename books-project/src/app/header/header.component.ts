import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private booksService:BooksService){}


  onSelected(selectedLink: string) {
    this.booksService.headerSelected.emit(selectedLink);
  }
}
