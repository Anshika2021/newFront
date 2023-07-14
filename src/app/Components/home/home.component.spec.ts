// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';
// import { MatDialog } from '@angular/material/dialog';
// import { FormBuilder } from '@angular/forms';
// import { UserService } from '../../Service/user.service';
// import { SnackbarService } from '../../Service/snackbar.service';
// import { CatalogService } from '../../Service/catalog.service';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//    let fixture: ComponentFixture<HomeComponent>;
//   // let fixture: HomeComponent;
//   let userServiceMock: any;
//   let formBuilderMock: any;
//   let snackBarServiceMock: any;
//   let catalogServiceMock: any;
//   let dialog: any;
  
//   imports:[
//     FormBuilder,
//     MatDialog,
//     UserService,
//     SnackbarService,
//     CatalogService
//    ]

//   //  beforeEach(() =>{

//   //  })

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// //   describe('Test: checkTokenValidity', () =>{
// //   it('should return true', () =>{
// //     expect(component.checkTokenValidity()).toBe(true);

// //   });
// // });

// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
 import { Component, OnInit } from '@angular/core';
//   import { handleSignupAction } from '../component';
//  import { handleLoginAction } from '../component';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

describe('handleSignupAction', () => {
  let component: Component;
  let fixture: ComponentFixture<Component>;
   let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [component],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component);
    component = fixture.componentInstance;
  });

  it('should open the SignUpComponent dialog', () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';

    // handleSignupAction.call(component);

    expect(dialogSpy.open).toHaveBeenCalledWith(
      SignUpComponent,
      dialogConfig,
    );
  });
  
  it('should open the LoginComponent dialog', () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';

    // handleLoginAction.call(component);

    expect(dialogSpy.open).toHaveBeenCalledWith(
      LoginComponent,
      dialogConfig,
    );
  });
});





