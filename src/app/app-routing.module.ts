import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
   
  },
  {
    path: 'view', component: ViewCandidateComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
