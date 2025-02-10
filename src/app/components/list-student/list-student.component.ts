import { Component } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-list-student',
  standalone: false,
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {

  studentData:any = [];

  constructor(private studentservice: StudentService){}

 ngOnInit(){
  this.getAllStudentsList()
 }

  getAllStudentsList(){
    this.studentservice.getAllStudentsList().subscribe((allData)=>{
      this.studentData = allData;
    })
  }

  deleteStudentData(studendID:any){
  this.studentservice.deleteStudentData(studendID).subscribe((res:any)=>{
    if(res){
      this.ngOnInit();
    }
  })
  }

}
