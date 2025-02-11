import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {path:'login', component:LoginStudentComponent},
  {path:'edit/:id', component:EditStudentComponent},
  {path:'list', component:ListStudentComponent},
  {path:'register', component:ListStudentComponent},
  {path:'add',component:AddStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
