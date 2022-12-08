import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "./book-list/book-item/book.model";

@Injectable()
export class BooksService {
    books: Book[] = [
        new Book('Inferno', 'Dan Brown',
            'NOW A MAJOR FILM STARRING TOM HANKS AND FELICITY JONESFlorence: Harvard symbologist Robert Langdon ' +
            'awakes in a hospital bed with no recollection of where he is or how he got there.' +
            'NOW A MAJOR FILM STARRING TOM HANKS AND FELICITY JONES' +
            'Florence: Harvard symbologist Robert Langdon awakes in a hospital bed with no recollection of where he is or how he got there. Nor can he explain the origin of the macabre object that is found hidden in his belongings.' +
            'A threat to his life will propel him and a young doctor, Sienna Brooks, into a breakneck chase across the city. Only Langdon\'s knowledge of the hidden passageways and ancient secrets that lie behind its historic facade can save them from the clutches of their unknown pursuers.' +
            'With only a few lines from Dante\'s Inferno to guide them, they must decipher a sequence of codes buried deep within some of the Renaissance\'s most celebrated artworks to find the answers to a puzzle which may, or may not, help them save the world from a terrifying threat...' +
            'Origin, the spellbinding new Robert Langdon thriller from Dan Brown, is out now',
            'https://media.takealot.com/covers_tsins/36981831/69a9e4f268833bdcb9110cab8406ac10-pdpxl.jpg'
        ),
        new Book('Finding Me', 'Viola Davis', 'In my book, you will meet a little girl named Viola who ran from her past until she made a life-changing decision to stop running forever.'
            , 'https://media.loot.co.za/static/gallery/j/z/l/jzlg-7523-ga80/jzlg-7523-ga80.0.jpg?w=400&h=500&t=embed'),
        new Book('We\'re going to need more wine', 'Gabrille Union', 'In the spirit of Amy Poehler\'s Yes Please, Lena Dunham\'s Not That Kind of Girl, and Roxane Gay\'s Bad Feminist, a powerful collection of essays about gender, sexuality, race, beauty, Hollywood, and what it means to be a modern woman.',
            'https://media.loot.co.za/static/gallery/x/m/d/xmdh-5045-g590/xmdh-5045-g590.0.photo.0062693999.jpg?w=400&h=500&t=embed'),
        new Book('George Reynolds', 'Ethics in Information Technology', 'ETHICS IN INFORMATION TECHNOLOGY, 6E provides an understanding of the legal, ethical, and societal implications of information technology that you\'ll need as a successful IT professional.', 'https://media.loot.co.za/static/gallery/h/c/z/hczp-5042-g020/hczp-5042-g020.0.photo.1337405876.jpg?w=400&h=500&t=embed')

    ];

    booksEmitter = new EventEmitter<Book[]>();

    bookSelected = new EventEmitter<Book>();

    addBook(book: Book) {
        this.books.push(book);
        this.booksEmitter.emit(this.books.slice());
    }
    deleteBook(book: Book) {
        for (let b of this.books) {
            if (b === book) {
                this.books.slice(1,1); // delete a book 
            }
        }
    }

    getBooks() {
        return this.books.slice();
    }
}