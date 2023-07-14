// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should ', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { LoginComponent } from "./login.component";
// import { MatInputModule } from "@angular/material/input";
// import { MatPaginatorModule } from "@angular/material/paginator";
// import { MatSortModule } from "@angular/material/sort";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
// import { MatTableModule } from "@angular/material/table";
// import { RouterTestingModule } from "@angular/router/testing";
// // import { SnackbarService } from "src/app/Service/snackbar.service";
// import { SnackbarService } from "../../Service/snackbar.service";

// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MatIconModule } from "@angular/material/icon";


// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       providers:[
         
 
//       ],
//       imports:[
//         MatInputModule,
//         MatPaginatorModule,
//         MatSortModule,
//         MatProgressSpinnerModule,
//         MatTableModule,
        
//         RouterTestingModule,
//         FormsModule,
//         BrowserAnimationsModule,
       
//         ReactiveFormsModule,
//         MatIconModule
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { Router } from "@angular/router";
import { SnackbarService } from "../../Service/snackbar.service";
import { UserService } from "../../Service/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";




describe('LoginComponent', ()=>{
  let fixture: LoginComponent;
   let userServiceMock: any;
  let formBuilderMock: any;
  let sncakBarServiceMock: any;
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
      login: jest.fn()
    };
    formBuilderMock = new FormBuilder();
    sncakBarServiceMock = jest.fn();
    fixture = new LoginComponent(
      formBuilderMock,
       userServiceMock,
       sncakBarServiceMock,
       snackBarMock,
      routerMock
    );
    fixture.ngOnInit();

  });

  

  describe('Test: Login Form', () =>{
    it('should validate the form',() =>{
      fixture.loginForm.controls.email.setValue('abc@gmail.com');
      fixture.loginForm.controls.password.setValue('abc');
expect(fixture.loginForm.valid).toBeTruthy();
    });

  });


  describe('Test: Form invalid', () =>{
    it('should call loginUser', () =>{
      const formData = {
        email: 'abc123@gmail.com',
        password: 'abc123'
      };
      const spyhandleSubmit = jest.spyOn(userServiceMock, 'login').mockReturnValue(true);
      expect(userServiceMock.login(formData)).toBe(true);
      expect(spyhandleSubmit).toHaveBeenCalledWith(formData);
    });
  });


  describe('Test: Login Form', () =>{
    it('should invalidate the form',() =>{
      fixture.loginForm.controls.email.setValue('');
      fixture.loginForm.controls.password.setValue('');
expect(fixture.loginForm.valid).toBeFalsy();
    });


});
});



