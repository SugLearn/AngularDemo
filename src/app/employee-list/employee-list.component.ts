import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  ErrorShow = false;
  constructor(private employeeService: EmployeeService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.employeeService.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    })
  }

  editEmp(id: number){
    this.router.navigate(['update',id]);
  }

  deleteEmp(employee: Employee) {
    this.employeeService.deleteEmployees(employee.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => {console.log(error); this.ErrorShow = true; });
  }

  reloadData(){
    this.employeeService.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    })
  }



}
