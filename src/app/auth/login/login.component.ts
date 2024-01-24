import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

import { Router } from '@angular/router';

//service list
import { AuthService } from '../auth.service';

// third party package list
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // token
  token:any;

  login_form:FormGroup | any;

  user_login_section:boolean=true;

  submitted:boolean=false;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private modalService:NgbModal,
    private router:Router,
  ){


    this.login_form=this.fb.group({
      email:[''],
      password:[''],
    });

  }

  // Login section start

  // Validations

  get l()
  {
    return this.login_form.controls;
  }

  login_form_submit()
  {
   
    this.submitted=true;

    this.login_form.get('email').setValidators([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
    this.login_form.get('email').updateValueAndValidity();

    this.login_form.get('password').setValidators([Validators.required]);
    this.login_form.get('password').updateValueAndValidity();
    if(this.login_form.valid)
    {
      const formdata= new FormData();
      formdata.append('email', this.login_form.get('email').value);    
      formdata.append('password', this.login_form.get('password').value);
      this.authService.user_login(formdata).subscribe((res:any)=>{
        if(res.status==201)
        {
          // console.log('token',res.authorisation[0]['token']);
          if(res.authorisation[0]['token'])
          {
              this.token = res.authorisation[0]['token'];
              localStorage.setItem('auth_token',this.token)    
          }  
          // Swal.fire({
          //   title: "Login succesfully.",             
          //   icon: "success",
          // }); 
          
          Swal.fire({
            title: res.messages,             
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/admin/index');
            }
            else {
              this.router.navigateByUrl('/admin/index');
            }
          })
        
        }
        if(res.status==404)
        {
          Swal.fire({
            title: 'Invalid User Credentials',             
            icon: "error",
          });
        }
      });
    }
  }

  // Login section end

}
