import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { MyImageStying } from './myImageStyling/myImageStying.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { BooksService } from './books/books.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'books', component: BooksComponent, children: [
      { path: 'book_details', component: BookDetailsComponent }]
  },
  {
    path: 'add_book', component: BookEditComponent
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookItemComponent,
    MyImageStying,
    DropdownDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
