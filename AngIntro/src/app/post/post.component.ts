import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string = "Post List"
  messagePost: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
  childMessage: string = "Message from child component";
  loadedPosts: Array<any> = [];
  messageOutput: string = "Message from child component using Output";
  @Output() messageEvent = new EventEmitter<string>();
  @Input() fromParent: string = "default";

  constructor(private postService: PostService) {
    /* can use dependency injection or create a new instance of an object */
    /* let postService = new PostService(); */
    this.loadedPosts = postService.postList;
  }

  ngOnInit(): void {
  }
  sendMessage() {
    /* console.log("message emitted"); */
    this.messageEvent.emit(this.messageOutput)
  }
}
