import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  schools: any[] = []

  displayedColumns: string[] = ['name', 'cidade'];


  getSchools(){
    this.schoolService.getAll().subscribe(
      (res)=>{
        this.schools = res;
      }
    )
  }

}
