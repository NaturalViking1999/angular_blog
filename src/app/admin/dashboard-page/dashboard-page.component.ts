import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  
  posts: any = [];
  pSub: Subscription = new Subscription();
  dSub: Subscription = new Subscription();
  searchPost: string = '';

  constructor(private postsService: PostsService) { }

  ngOnInit(): any {
    this.pSub = this.postsService.getPosts().subscribe( posts => {
      this.posts = posts
    })
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe( ()=> {
      this.posts = this.posts.filter((post: any) => post.id !== id)
    })
  }

}
