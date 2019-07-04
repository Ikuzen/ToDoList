import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {TaskComponent} from './task/task.component';
import {ToDoComponent} from './to-do/to-do.component';
import {AllComponent} from './all/all.component'
import { ActiveComponent } from './active/active.component';
import { DoneComponent } from './done/done.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'task', component: TaskComponent},
  { path: 'all', component: AllComponent },
  {path: 'active', component: ActiveComponent},
  {path: 'done', component: DoneComponent},
  { path: 'to-do', component: ToDoComponent },
  { path:'detail/:id',component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default redirect to dashboard (when path is '')

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
}