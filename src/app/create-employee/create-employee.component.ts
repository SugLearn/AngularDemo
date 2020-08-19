import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  ErrorShow = false;
  LogError: boolean;
  constructor(private router: Router, private empService: EmployeeService) { }

  ngOnInit() {

  }

  newEmployee(): void{
    this.submitted =false;
    this.employee = new Employee();

  }

  save() {
    this.empService.createEmployee(this.employee)
      .subscribe(data =>{
        console.log(data);
        this.gotoList();
        this.LogError = true;
       } ,
       error => {
        console.log(error);
        this.ErrorShow = true;

      });
    this.employee = new Employee();

  }

  onSubmit() {
     this.submitted = true;
     this.save();
    if(this.LogError){
      this.gotoList();
  }
  }

  gotoList() {

      this.router.navigate(['/employees']);


  }

}
