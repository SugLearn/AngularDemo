import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Employee[]>(this.baseUrl+'getEmployees');
  }

  createEmployee(employee: Employee){
    return this.http.post(this.baseUrl+'addEmployees',employee);
  }

  updateEmployee(id:number,employee: Employee){
    return this.http.put(this.baseUrl + 'updateEmployee/' + id, employee);
  }

  getEmployee(id: number){
    return this.http.get<Employee>(this.baseUrl + 'getEmployeeById/' + id);
  }

  deleteEmployees(id: number) {
    return this.http.delete<Employee[]>(this.baseUrl + 'deleteEmployee/'+ id);
  }

}
