import { Component } from '@angular/core';
import { of, from } from 'rxjs';
import { reduce} from 'rxjs/operators';
import { interval } from 'rxjs';
import{tab} from './tab'

//emits any number of provided values in sequence

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'What to do.... What to do..?';
  tabLink(url:string){
    console.log(tab)
    if(url === 'Dashboard'){
      tab = "Dashboard";
    }
    else if(url === 'All'){
      tab= "All";
    }
    else if(url === 'Active'){
      tab= "Active";
    }
    else if(url === 'Done'){
      tab= "Done";
    }

  }
}


// const source = interval(1000);
// source.pipe(((acc, val) => acc + val));
// const subscribe = source.subscribe(val => console.log(val));
// console.log(subscribe)