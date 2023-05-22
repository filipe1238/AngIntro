import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage = "Hello from parent";
  //grabs everything from  chield component
  @ViewChild(PostComponent) childComponent: any;
  fromChildOutput: string = "";

  formJson: any = {};


  constructor() {
    console.log("from constructor:", this.childComponent);
  }

  ngAfterViewInit(): void {
    console.log("from view init:", this.childComponent);
  }

  onChangeInputs($event) {
    let newInput = {};
    if ($event.target.type !== "checkbox") {
      newInput = { [$event.target.name]: $event.target.value }
    } else {
      newInput = { [$event.target.name]: $event.target.checked }
    }


    this.formJson = {
      ...this.formJson,
      ...newInput
    };
    console.log("formJson:", this.formJson);
  }

  receiveMessage($event) {
    this.fromChildOutput = $event;
    console.log("message received:", $event);

  }
}

