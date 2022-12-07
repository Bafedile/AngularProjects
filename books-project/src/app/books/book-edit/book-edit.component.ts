import { Component,Output,ElementRef,ViewChild,EventEmitter } from '@angular/core';
import { Book } from '../book-list/book-item/book.model';
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

@Output() addedBookEvent = new EventEmitter<Book>();

  onAddingBook(){
    this.addedBookEvent.emit(new Book(this.titleInput.nativeElement.value,this.authorInput.nativeElement.value,
      this.descriptionInput.nativeElement.value,this.imagePathInput.nativeElement.value));
  }
}
