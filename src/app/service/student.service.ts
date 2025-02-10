import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  jsonURL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAllStudentsList(){
    return this.http.get(`${this.jsonURL}/getAllStudentsList`);
  }

  addStudent( data:any){
    return this.http.post(`${this.jsonURL}/getAllStudentsList`,data)
  }

  deleteStudentData(id:any){
    return this.http.delete(`${this.jsonURL}/getAllStudentsList/${id}`)
  }

}
