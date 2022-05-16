import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPipeComponent } from './components/learning-pipe/learning-pipe.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'form', component: UserFormComponent },
  {path: 'form/:id', component: UserFormComponent },
  {path: 'data-binding', component: DataBindingComponent },
  {path: 'pipes', component: LearningPipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
