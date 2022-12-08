import { Component,Output,ElementRef,ViewChild,EventEmitter } from '@angular/core';
import { Book } from '../book-list/book-item/book.model';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
@ViewChild('titleInput')titleInput:ElementRef;
@ViewChild('authorInput')authorInput:ElementRef;
@ViewChild('descriptionInput')descriptionInput:ElementRef;
@ViewChild('imagePathInput')imagePathInput:ElementRef;

constructor(private booksService:BooksService){}

  onAddingBook(){
      this.booksService.addBook(new Book(this.titleInput.nativeElement.value,this.authorInput.nativeElement.value,
        this.descriptionInput.nativeElement.value, this.imagePathInput.nativeElement.value));
    }
}
