// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { SnackbarService } from "../../Service/snackbar.service";
import { UserService } from "../../Service/user.service";
import { SignUpComponent } from "./sign-up.component";

// import { SignUpComponent } from './sign-up.component';

// describe('SignUpComponent', () => {
//   let component: SignUpComponent;
//   let fixture: ComponentFixture<SignUpComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SignUpComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SignUpComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('SignupComponent', ()=>{
  let fixture: SignUpComponent;
   let userServiceMock: any;
  let formBuilderMock: any;
  let snackBarServiceMock: any;
  let routerMock: any;
  let snackBarMock: any;


  imports:[
   FormBuilder,
   Router,
   MatSnackBar,
   UserService,
   SnackbarService
  ]

  beforeEach(() =>{
    userServiceMock = {
      signup: jest.fn()
    };
    formBuilderMock = new FormBuilder();
    snackBarServiceMock = jest.fn();
    fixture = new SignUpComponent(
      formBuilderMock,
       userServiceMock,
       snackBarServiceMock,
       snackBarMock,
      routerMock
    );
    fixture.ngOnInit();
  });

    describe('Test: Signup Form', () =>{
      it('should not validate the form',() =>{
        fixture.signupForm.controls.name.setValue('123');
        fixture.signupForm.controls.contactNumber.setValue('678909');
        fixture.signupForm.controls.email.setValue('123');
        fixture.signupForm.controls.password.setValue('123');
       expect(fixture.signupForm.valid).toBeFalsy();
      });
  
    });

    describe('Test: Form invalid', () =>{
      it('should call signupUser', () =>{
        const formData = {
          name: 'abc',
          email: 'abc123@gmail.com',
          contactNumber: '1234567890',
          password: 'abc123'
        };
        const spyhandleSubmit = jest.spyOn(userServiceMock, 'signup').mockReturnValue(true);
        expect(userServiceMock.signup(formData)).toBe(true);
        expect(spyhandleSubmit).toHaveBeenCalledWith(formData);
      });
    });
    
    describe('Test: Signup Form', () =>{
      it('should invalidate the form',() =>{
        fixture.signupForm.controls.email.setValue('');
        fixture.signupForm.controls.password.setValue('');
  expect(fixture.signupForm.valid).toBeFalsy();
      });
  
  
  });
  // describe('Test: ngONInit', () =>{
  //   it('should initialize signupForm', () =>{
  //     const signupForm = {
  //       name: 'abc',
  //       email: 'abc@gmail.com',
  //       contactNumber: '1234567890',
  //       password: 'abc'
  //     };
  //     expect(fixture.signupForm).toEqual(signupForm);
  //   });
  // });
  //   const loginForm = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  //   });
  //   expect(fixture.loginForm).toEqual(loginForm);
  // });
  // });


  });

