import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




































// describe('Test: ngONInit', () =>{
  //   it('should initialize loginForm', () =>{
  //     const loginForm = {
  //       email: '',
  //       password: ''
  //     };
  //     expect(fixture.loginForm).toEqual(loginForm);
  //   });
  // });


  
