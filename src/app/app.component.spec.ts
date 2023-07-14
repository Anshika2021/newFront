// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { AppComponent } from "./app.component";

// describe('AppComponent', () => {
//      let fixture: AppComponent;

//         beforeEach(async () => {

//            fixture = new AppComponent();
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'RetailWebApp'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('RetailWebApp');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('RetailWebApp app is running!');
//   });
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { TestBed } from "@angular/core/testing";

describe('AppComponent', () => {
  let fixture:AppComponent;
   
  beforeEach(() => {          
    fixture = new AppComponent();
    beforeEach(async () => {
      fixture = new AppComponent();
      await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule
          ],
         declarations: [
           AppComponent
         ],
       }).compileComponents();

     });
    });
   
 


  it('should have a title RetailWebApp', () =>{
    expect(fixture.title).toEqual('RetailWebApp');
  });
});



//   it('should have a title RetailWebApp', () =>{
//     expect(fixture.title).toEqual('RetailWebApp');
//   });
// });
