import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  onSubmit() {
    console.log(this.form.value);
  }

  constructor(fb: FormBuilder) {
    /* Usinb builder */
    this.form =
      fb.group({
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        contactDetails: fb.group({
          adress: ['', Validators.required],
          shippingAdress: ['', Validators.required],
          contactNo: ['', Validators.required]
        }),
        skills: fb.array([])
      });
    /* from scratch */
    /*     this.form = new FormGroup({
          fullName: new FormControl('', [
            Validators.required,
            Validators.minLength(5)]
          ),
          email: new FormControl('', [
            Validators.required,
            //Validators.pattern(this.emailPattern)
            Validators.email
          ]),
          contactDetails: new FormGroup({
            adress: new FormControl('', Validators.required),
            shippingAdress: new FormControl('', Validators.required),
            contactNo: new FormControl('', Validators.required)
          }),

          skills: new FormArray([
          ])
        }); */

  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkills(skills: HTMLInputElement) {
    this.Skills.push(new FormControl(skills.value));
    console.log(this.form.value);
    skills.value = '';
  }

  removeSkill(index) {
    this.Skills.removeAt(index);
  }

  ngOnInit(): void {
  }

}
