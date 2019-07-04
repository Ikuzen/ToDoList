import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addTask(){
    let newID = HEROES[HEROES.length-1].id+1
    HEROES.push({ id:newID ,active:true,done:false,description:"", name: 'New Task !',checked:false })
    console.log("pushed")
  }
}
