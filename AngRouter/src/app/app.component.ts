import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngRouter';

  constructor(private router: Router) { }

  ngOnInit() {
    const obsTest$ = new Observable(
      (observer) => {
        observer.next('Hello');

        setInterval(() => {
          observer.next('Goodbye');
        }, 2000);

        observer.next('World');
        // to unsubscribe from the observable, complete is called
        //this will also unsubscribe from the interval
        // comment out the complete and see what happens
        /* observer.complete(); */
      }
    );
    obsTest$.subscribe(
      (val) => {
        console.log(val);
      });

  }
  onSubmit() {
    //normal navigation
    /* this.router.navigate(['/posts']); */
    //with params
    /* this.router.navigate(['/post', 1, 'edit']); */
    //with queryParams
    this.router.navigate(['/posts'], { queryParams: { page: 1, orderBy: 'title' } });
  }
}
