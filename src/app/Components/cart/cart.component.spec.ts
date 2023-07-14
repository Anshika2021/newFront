//  import { ComponentFixture, TestBed } from '@angular/core/testing';

  // import { CartComponent } from 'src/app/Components/cart/cart.component';

// describe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CartComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('it should checkcartitems', () =>{
//   //   const result= await 
//   // })

//   // it('it should add items', () => {
//   //   let Item = jest.spyOn(testcartItemList, 'getItem').getMockImplementation(() => of(Item));
//   //   component.rows = 
//   //   component.add();
//   //   expect(Item).toBeCalled()
//   //   expect(component.rows).toEqual(Item);
//   // });

// });



// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MatDialog } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// // import { CartComponent } from './cart.component';
// import { CartService } from 'src/app/Service/cart.service';
// import { SnackbarService } from '../../Service/snackbar.service';
// import { UserService } from '../../Service/user.service';


// describe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [CartComponent],
//       providers: [
//         CartService,
//         SnackbarService,
//         UserService,
//         {
//           provide: MatDialog,
//           useValue: jasmine.createSpyObj('MatDialog', ['open']),
//         },
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             queryParams: {
//               subscribe: (fn: (value: any) => void) =>
//                 fn({ cartId: 'test-cart-id' }),
//             },
//           },
//         },
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // Write your tests here
// });


// // it('should create the component', () => {
// //   expect(component).toBeTruthy();
// // });

// it('should initialize the component', () => {
//   // Perform assertions to test the initial state of the component
// });

// it('should fetch user cart items and calculate grand total', () => {
//   // Perform assertions to test the behavior of fetching user cart items
//   // and calculating the grand total
// });


// // import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MatDialogModule } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// import { CartComponent } from './cart.component';
// import { CartService } from '../../Service/cart.service';
// import { SnackbarService } from '../../Service/snackbar.service';
// import { UserService } from '../../Service/user.service';
// import { CheckoutComponent } from '../checkout/checkout.component';

// describe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;

  
//   imports:[
  
  
//     UserService,
//     SnackbarService,
//     MatDialogModule
//    ]
 

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, MatDialogModule],
//       declarations: [CartComponent],
//       providers: [
//         CartService,
//         SnackbarService,
//         UserService,
//         { provide: ActivatedRoute, useValue: {} }
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // Add more test cases here as needed

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should open the checkout dialog', () => {
//     spyOn(component.dialog, 'open').and.callThrough();
//     component.checkoutClickHandler();
//     expect(component.dialog.open).toHaveBeenCalledWith(CheckoutComponent, jasmine.objectContaining({ width: '900px' }));
//   });
  

// });




// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MatDialogModule } from '@angular/material/dialog';
// import { ActivatedRoute } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';

// import { CartComponent } from './cart.component';
// import { CartService } from 'src/app/Service/cart.service';
// import { SnackbarService } from '../../Service/snackbar.service';
// import { UserService } from '../../Service/user.service';
// import { CheckoutComponent } from '../checkout/checkout.component';

// describe('CartComponent', () => {
//   // let component: CartComponent;
//   // let fixture: ComponentFixture<CartComponent>;

//   let fixture: CartComponent;
//   let httpClient: any;
//   let cartService: any;
//   let dialog: any;
//   let route: any;
//   let snackBarService: any;
//   let userServicec: any;

//   imports:[
//     HttpClientTestingModule,
//     CartService,
//     MatDialogModule,
//     ActivatedRoute,
//     SnackbarService,
//     UserService
    
//   ]

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule, MatDialogModule],
  //     declarations: [CartComponent],
  //     providers: [
  //       CartService,
  //       SnackbarService,
  //       UserService,
  //       { provide: ActivatedRoute, useValue: {} }
  //     ]
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CartComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should open the checkout dialog', () => {
//     spyOn(component.dialog, 'open').and.callThrough();
//     component.checkoutClickHandler();
//     expect(component.dialog.open).toHaveBeenCalledWith(CheckoutComponent, jasmine.objectContaining({ width: '900px' }));
//   });
// });
