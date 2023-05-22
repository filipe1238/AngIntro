import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  postArray: Array<string> = ["post1", "post2", "post3", "post4", "post5"];

  objArray: Array<object> = []

  constructor() { }

  ngOnInit(): void {
    this.objArray = [
      {
        id: 1,
        post: "post1",
        content: "content1"
      },
      {
        id: 2,
        post: "post2",
        content: "content2"
      },
      {
        id: 3,
        post: "post3",
        content: "content3"
      },
      {
        id: 4,
        post: "post4",
        content: "content4"
      },
      {
        id: 5,
        post: "post5",
        content: "content5"
      }
    ]
  }
  addNewObject = () => {
    let newId = this.objArray.length + 1;

    this.objArray.push({
      id: newId,
      post: `post${newId}`,
      content: `content${newId}`
    })
  }

  deleteObject = (post) => {
    let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }
  deleteObjectFromIndex = (index) => {
    this.objArray.splice(index, 1);
  }
}
