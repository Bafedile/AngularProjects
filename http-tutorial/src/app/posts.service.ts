import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Post } from "./post.model";


@Injectable({ providedIn: 'root' })

export class PostsService {

    error = new Subject<string>();
    constructor(private http: HttpClient) { };

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{ name: string }>(
            'https://ng-complete-guide-8ee9a-default-rtdb.firebaseio.com/posts.json',
            postData, {
            observe: 'response'
        })
            .subscribe((responsePost) => {
                console.log(responsePost.body)
            }, error => {
                this.error.next(error.error.error);
            });
        this.fetchPosts();
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-8ee9a-default-rtdb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({
                    'Custom-Header': 'Hello'
                }),
                params: new HttpParams().set('print', 'pretty')
            })
            .pipe(map((responseData) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }
                return postsArray;
            }), catchError(errorRes => {
                return throwError(errorRes);
            }));

    }
    deletePosts() {
        return this.http.delete(
            'https://ng-complete-guide-8ee9a-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events'
            }
        ).pipe(tap(event => {

            if (event.type === HttpEventType.Sent) {
                console.log(event.type);
            }
            if (event.type === HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }
}

