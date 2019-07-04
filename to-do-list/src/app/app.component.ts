import { Component } from '@angular/core';
import { of } from 'rxjs';
import { reduce} from 'rxjs/operators';
import { interval } from 'rxjs';

//emits any number of provided values in sequence

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'What to do.... What to do..?';
}


// const source = interval(1000);
// source.pipe(((acc, val) => acc + val));
// const subscribe = source.subscribe(val => console.log(val));
// console.log(subscribe)