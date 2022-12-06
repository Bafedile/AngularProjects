import { Component } from '@angular/core';
import { Book } from './book-item/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:Book[] = [
    new Book('Inferno','Dan Brown',
    'This books is about a man hunted by the government',
    'https://m.media-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_.jpg'
    ),
    new Book('Finding Me','Viola Davis','In my book, you will meet a little girl named Viola who ran from her past until she made a life-changing decision to stop running forever.'
    ,'https://media.loot.co.za/static/gallery/j/z/l/jzlg-7523-ga80/jzlg-7523-ga80.0.jpg?w=400&h=500&t=embed'),
    new Book('We\'re going to need more wine','Gabrille Union','In the spirit of Amy Poehler\'s Yes Please, Lena Dunham\'s Not That Kind of Girl, and Roxane Gay\'s Bad Feminist, a powerful collection of essays about gender, sexuality, race, beauty, Hollywood, and what it means to be a modern woman.',
    'https://media.loot.co.za/static/gallery/x/m/d/xmdh-5045-g590/xmdh-5045-g590.0.photo.0062693999.jpg?w=400&h=500&t=embed'),
    new Book('George Reynolds','Ethics in Information Technology','ETHICS IN INFORMATION TECHNOLOGY, 6E provides an understanding of the legal, ethical, and societal implications of information technology that you\'ll need as a successful IT professional.','https://media.loot.co.za/static/gallery/h/c/z/hczp-5042-g020/hczp-5042-g020.0.photo.1337405876.jpg?w=400&h=500&t=embed')
    
    ];
}
