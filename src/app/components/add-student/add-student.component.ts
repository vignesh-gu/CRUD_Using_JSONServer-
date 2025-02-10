import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  addStudent!:FormGroup

  constructor(private fb:FormBuilder,private studentService: StudentService ){}

  ngOnInit(){

    this.addStudent = this.fb.group({
      name:["",[Validators.required, Validators.minLength(3)]],
      email:["",[Validators.required, Validators.email]],
      phoneNo:["",[Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

  }

  addStudentData(){

    this.addStudent.markAllAsTouched();

    // Log form data (only if the form is valid)
    if (this.addStudent.invalid) {
      return
    } else {
      console.log(this.addStudent.value);
    }

    this.studentService.addStudent(this.addStudent.value).subscribe((data)=>{
      console.log('student added successfully');
      this.addStudent.reset();

    })


}



}
