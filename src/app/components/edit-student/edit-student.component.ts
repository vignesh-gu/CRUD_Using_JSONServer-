import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../service/student.service';


@Component({
  selector: 'app-edit-student',
  standalone: false,
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {

  editStudent!:FormGroup;
  studentId:string |null ="";

  constructor(private fb :FormBuilder,private router:ActivatedRoute,private studentService: StudentService){}

  ngOnInit(){
    this.studentId = this.router.snapshot.paramMap.get('id');
    this.getsStudentById();

    this.editStudent = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
    });
  }

  getsStudentById(){
    this.studentService.getStudentById(this.studentId).subscribe((response:any)=>{
      this.editStudent.patchValue({
        name:response.name,
        email:response.email,
        phoneNo:response.phoneNo
      })

    });

}

UpdateStudentData(){
  this.editStudent.markAllAsTouched();
  this.studentService.UpdateStudentData(this.studentId,this.editStudent.value).subscribe((result)=>{
    console.log('student data updated successfully');

  },(error)=>{
    console.log('student data upated unsuccessful');
  });
}

}
