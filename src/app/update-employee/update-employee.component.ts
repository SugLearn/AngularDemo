import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  emp: Employee;
  ErrorShow = false;
  // submitted: false;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.emp = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(data => {
      // console.log(data);
      this.emp = data;

    }, error => console.error(error)


    );

  }

  updateEmployee(){

    this.employeeService.updateEmployee(this.id, this.emp)
    .subscribe(data =>{console.log(data); this.gotoList();  } ,
    error => {console.log(error); this.ErrorShow = true; }

    );
    this.emp = new Employee;

  }

  onSubmit(){

    this.gotoList();
    this.updateEmployee();
    // this.submitted = true;
  }

  gotoList(){
     this.router.navigate(['/employees']);
  }

}
