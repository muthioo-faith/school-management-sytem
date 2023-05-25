import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
disableSelect: any;
  // disableSelect = new FormControl(false);
  // loginForm!: FormGroup

  // constructor(private builder:FormBuilder){}

  // ngOnInit(): void {

  //   this.loginForm = this.builder.group({
  //     first_name: ['', [Validators.required, Validators.minLength(10)]],
  //     second_name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
  //     Name_school: ['', [Validators.required]],
  //     Admission_No: ['', [Validators.required]],
  //     Country: ['', [Validators.required]],
  //     phone_number: ['', [Validators.required]],
  //     country: ['', [Validators.required]],


    
  //   });
    
  // }

  // submit(){

  // }



  constructor(private fb: FormBuilder) {}
 
  jobForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1'],
      NameofSchool: [''],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });


  get firstName(){
    return this.jobForm.get('firstName');
  }
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
 
  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }
 
  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        programLanguage: [''],
        experience: [0],
      })
    );
  }
 
  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }
}



