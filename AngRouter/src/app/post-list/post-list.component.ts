import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, AfterViewInit {
  posts: any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Mon premier post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        id: 2,
        title: 'Mon deuxième post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        id: 3,
        title: 'Encore un post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        loveIts: 0,
        created_at: new Date()
      },
    ];
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      /* console.log(params); */
      const page = params['page'];
      const orderBy = params['orderBy'];

      console.log(page, orderBy);
    });
  }
}
