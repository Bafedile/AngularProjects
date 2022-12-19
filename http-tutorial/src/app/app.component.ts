import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  subscription: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) { }

  ngOnInit() {
    this.subscription = this.postService.error.subscribe((error) => {
      this.error = error;
    })
    this.onFetchPosts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);

  }
  onHandleError() {
    this.error = null;
    this.isFetching = false;
  }

  onFetchPosts() {
    this.isFetching = true;
    // Send Http request
    this.postService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.error.error;
      this.isFetching = false;
    });
  }




  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.onFetchPosts();
    });


  }
  
  // onFetchPosts() {
  //   // Send Http request
  //   this.http.get('https://ng-complete-guide-8ee9a-default-rtdb.firebaseio.com/posts.json')
  //     .pipe(map((responseData:{[key:string]:Post}) => {
  //       const postsArray:Post[] = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           postsArray.push({ ...responseData[key], id: key });
  //         }
  //       }
  //       return postsArray;
  //     }))
  //     .subscribe((posts) => {
  //       console.log(posts);
  //     })
  // }
}
