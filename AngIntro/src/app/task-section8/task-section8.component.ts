import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-section8',
  templateUrl: './task-section8.component.html',
  styleUrls: ['./task-section8.component.css']
})
export class TaskSection8Component implements OnInit {

  datList: any = [];
  formInput: any = {};

  onChangeInputs($event) {
    let newInput = { [$event.target.name]: $event.target.value };

    this.formInput = { ...this.formInput, ...newInput };

    console.log("formJson:", this.formInput);
  }
  onSubmit() {
    let newId = this.datList.length + 1;
    if (this.formInput) {
      this.datList.push({ id: newId, ...this.formInput });
      this.formInput = {};
    }
   
    console.log("datList:", this.datList);
  }
  removeIndex(index){
    this.datList.splice(index,1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
