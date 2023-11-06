import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-addschools',
  templateUrl: './addschools.component.html',
  styleUrls: ['./addschools.component.scss']
})
export class AddschoolsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private schoolService: SchoolService, private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  schoolForm: FormGroup = this.formBuilder.group({
    name: [''],
    street: [''],
    number: [''],
    neighborhood: [''],
    city: []
  })
    saveSchool(){
      this.loaderService.show();
      console.log(this.schoolForm.value);
      this.schoolService.createSchool(this.schoolForm.value).subscribe((res)=>{
        this.loaderService.hide();
        
      }
      )
    }
}
