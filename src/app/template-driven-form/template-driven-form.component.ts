import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit = (form: NgForm) => {
    /* console.log(form.value); */
    if (form.valid && !form.invalid) {
      console.log("form is valid");
    }
  }
  getValue = (formValue: FormControl) => {
    console.log(formValue);
  }

}
