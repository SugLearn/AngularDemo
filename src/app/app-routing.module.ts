import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'employees', component: EmployeeListComponent},
  { path: 'add', component: CreateEmployeeComponent },
  {path: 'update', component:UpdateEmployeeComponent},
  {path:'home',component:HomeComponent},
  {path:'logout',component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
