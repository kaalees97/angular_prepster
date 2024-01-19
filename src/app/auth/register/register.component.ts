import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors  } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Auth list
import { AuthService } from '../auth.service';

// environment url
// import { environment } from 'src/app/environment';
    
// third party package list
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  user_register_section:boolean=true;

  // register form
  register_form:FormGroup | any;

  // token
  token:any;

  // Submit
  submitted:boolean=false;

  // Show password
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService,
    private modalService:NgbModal
  ){

    this.register_form=this.fb.group({

      name:[''],
      mobile_number:[''],
      email:[''],
      password:[''],

    });

  }

  // register section start

  // Validations

  get r()
  {
    return this.register_form.controls;
  }

  register_form_submit()
  {
 
    this.submitted=true;

    // name
    this.register_form.get('name').setValidators([Validators.required]);
    this.register_form.get('name').updateValueAndValidity();

    // mobile number
    // this.register_form.get('mobile_number').setValidators([Validators.required]);
    // this.register_form.get('mobile_number').updateValueAndValidity();

    // Allow the 10 digit validations mobile number

    this.register_form.get('mobile_number').setValidators([
      Validators.required,
      Validators.pattern(/^\d{10}$/), // Ensure 10 digits only
    ]);
    this.register_form.get('mobile_number').updateValueAndValidity();

    // email
    this.register_form.get('email').setValidators([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
    this.register_form.get('email').updateValueAndValidity();

    // Add a custom validator function for password length

    const customPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;

      // Check for a minimum length of 6 characters
      if (password && password.length < 6) {
        return { minLength: true, message: 'Password must be at least 6 characters long' };
      }

      // Check if the password is a 3-digit number
      if (/^\d{3}$/.test(password)) {
        return { disallowedDigits: true, message: 'Password cannot be a 3-digit number' };
      }

      return null;
    };
    
    // password
    this.register_form.get('password').setValidators([Validators.required,customPasswordValidator]);
    this.register_form.get('password').updateValueAndValidity();
    

    if(this.register_form.get('email').value && this.register_form.get('password').value)
     { 
          if(this.register_form.valid)
          {
            const formdata= new FormData();
            formdata.append('mobile_number', this.register_form.get('mobile_number').value);    
            formdata.append('password', this.register_form.get('password').value);
            formdata.append('name', this.register_form.get('name').value);
            formdata.append('email', this.register_form.get('email').value);
            this.authService.user_register(formdata).subscribe((res:any)=>{
              if(res.status==201)
              {

                Swal.fire({
                  title: res.messages,             
                  icon: "success",
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigateByUrl('/login');
                  }
                  else {
                    this.router.navigateByUrl('/login');
                  }
                })
                // clear validator
                this.register_form.get('email').setValue(this.register_form.get('email').value);
                this.register_form.get('name').clearValidators();
                this.register_form.get('mobile_number').clearValidators();
                this.register_form.get('password').clearValidators();
            
                 this.user_register_section=true;
              }
              if(res.status==500)
              {
                Swal.fire({
                  title: res.messages,             
                  icon: "info",
                });              
              }
              if(res.status==404)
              {
                Swal.fire({
                  title: res.messages,             
                  icon: "error",
                });                
              }
            });
          }
    }
    else if(this.register_form.get('email').value && this.register_form.get('password').value)
    {
        Swal.fire({
          title: "password mismatch.",             
          icon: "info",
        });
    }
  }

  // register section end

}
