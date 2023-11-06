import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-lookstudents',
  templateUrl: './lookstudents.component.html',
  styleUrls: ['./lookstudents.component.scss']
})
export class LookstudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents()
  }
   students: Student[] = []
   displayedColumns: string[] = ['name', 'escola'];

   getStudents(){
    this.studentService.getAll().subscribe(
      (res)=>{
        this.students = res;
        console.log(this.students)
      }
    )
   }

   abrirNoWaze(lat: any, long: any){
    const wazeLink = `waze://?ll=${lat},${long}`;
    window.location.href = wazeLink;
   }
  

  
}
