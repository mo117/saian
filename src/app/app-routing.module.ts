import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/HomePage/Pages/home/home.component';
import { JoinusComponent } from './features/joinUsPage/joinus/joinus.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'joinus', component: JoinusComponent, pathMatch: 'full' },

  { path: '', redirectTo: '/home', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
