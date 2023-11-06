import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultCepService } from 'src/app/services/consult-cep.service';
import { LoginService } from 'src/app/services/login.service';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.scss']
})
export class AddstudentsComponent implements OnInit {


constructor(private formBuilder: FormBuilder,private cepService: ConsultCepService, private loginService: LoginService, private schoolService: SchoolService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getSchools();
  }


  schools: any;
  studentForm: FormGroup = this.formBuilder.group({
    name: [''],
    lastName: [''],
    gender: [''],
    street: [''],
    neighborhood: [''],
    city: [''],
    zipCode: [''],
    number: [''],
    // SchoolId: [],
    age: [''],
    complement: [''],
    turn:[''],
    // UserId:[],
    parentDocumentNumber:[''],
    // price: [''],
    // date: ['']
    latitude: [''],
    longitude: ['']
  })

  public parentForm: FormGroup = this.formBuilder.group({
    name: [''],
    lastName: [''],
    phone: [''],
    documentNumber: ['']
  })

  getAdress(cep: string){
    this.cepService.getAdress(cep).subscribe(
      (res)=>{
        this.studentForm.controls["street"].setValue(res.logradouro);
        this.studentForm.controls["neighborhood"].setValue(res.bairro);
        this.studentForm.controls["city"].setValue(res.localidade);
      }
    )
  }

  getParentForDocumentNumber(documentNumber: string){
    this.loginService.getParent(documentNumber).subscribe(
      (res)=>{
        if(res != ''){
          this.parentForm.controls["name"].setValue(res.name);
          this.parentForm.controls["lastName"].setValue(res.lastName);
          this.parentForm.controls["phone"].setValue(res.phone);
          this.parentForm.controls["documentNumber"].setValue(res.documentNumber);
          this.parentForm.disable();
        }(err: any) => {
          this.parentForm.controls["name"].enable();
        }
      }
    )
  }

  getSchools(){
    this.schoolService.getAll().subscribe(
      (res)=>{
        this.schools = res;
      }
    )
  }

  createStudent(){
    this.getLatitudeLongitude();
    // this.studentService.create(this.studentForm.value).subscribe()
  }

  getLatitudeLongitude(){
    let city = this.studentForm.controls['city'].value;
    let number = this.studentForm.controls['number'].value;
    let neighborhood = this.studentForm.controls['neighborhood'].value;
    let street = this.studentForm.controls['street'].value;
    this.studentService.getLatitudeLongitude(street, number, neighborhood, city).subscribe(
      (res)=>{
        let latitude = res.results[0].geometry.lat.toString();
        let longitude = res.results[0].geometry.lng.toString();
        this.studentForm.controls['latitude'].setValue(latitude);
        this.studentForm.controls['longitude'].setValue(longitude);
        this.studentService.create(this.studentForm.value).subscribe();
      }
    )
  }

}
