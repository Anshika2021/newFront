import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartService } from 'src/app/Service/cart.service';
import { UserService } from '../../Service/user.service';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
 //import { CartComponent } from '../cart/cart.component';
import jwt_Decode from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from '../../Service/catalog.service';
import { SnackbarService } from '../../Service/snackbar.service';
import { GlobalConstants } from 'src/app/shared/GlobalConstrants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
productList:any;
flag:any = false;
tokenValid:any;
inputForm:any=FormGroup;
  // router: any;
// public totalItem : number = 0;
  // cartComponent: any;

 // public searchResult : string = '';
 // router: any;
  // cartService: any;
  // result:any;
   //searchResult:undefined|CartService[];
   // searchResult:any;
    public searchTerm : string = '';
  

  constructor( private snackBarService:SnackbarService ,private formBuilder:FormBuilder, private catalogService:CatalogService, private dialog:MatDialog, private userService:UserService, private cartService : CartService )
  {
    //  this.productList = this.cartService.cartItemList;
    //  console.log(this.productList.length)
  }


checkTokenValidity()
{
  const token:any = localStorage.getItem('token');
  console.log(token);
const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
console.log(expiry);
if(expiry * 1000 < Date.now())
{
  localStorage.clear();
}
var number;
return  this.tokenValid = expiry * 1000 > Date.now();
}

 


  ngOnInit():void
  {
  //  this.cartComponent.getProducts()
  //  .subscribe((res: string | any[])=>{
  //   this.totalItem = res.length;
  //  })
this.inputForm = this.formBuilder.group({
  input:[null,[Validators.required]]
})

    console.log(this.checkTokenValidity())

    const token:any = localStorage.getItem('token');
 
    if(token)
    {
      this.flag=true;

    }
    else{
      this.flag =false;
    }
  }

  // search(event:any){
  // //   // this.searchTerm = (event.target as HTMLInputElement).value;
  // //   // console.log(this.searchTerm);
  // //   // this.cartService.search.next(this.searchTerm);
  // // }
    
  handleSignupAction()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignUpComponent,dialogConfig);
  }
  handleLoginAction()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    
    this.dialog.open(LoginComponent,dialogConfig);
  }
  handleSubmit()
  {
    var data = this.inputForm.value;
    
    console.log(data.input);
   var name = data.input;
    // var lastName = data.lastName;


     this.catalogService.searchByName(name)
    //  this.catalogService.searchByLastName(lastName)


     .subscribe((res:any)=>{
      console.log(res);
    this.cartService.setProduct(res);
      if(res?.error)
      {
        this.snackBarService.openSnackBar(res?.error,GlobalConstants.genricError);
      }
      })
 


  }

  logoutAction()
  {
    localStorage.clear();
    this.reloadCurrentPage();
  //  this.router.navigate(['/catalog']);

  }

  // searchProduct(query:KeyboardEvent){
  //   if(query){
  //     const element = query.target as HTMLInputElement;
  //     console.warn(element.value)
  //     this.catalogService.searchProduct(element.value).subscribe((result)=>{
  //       console.warn(result);
  //       this.searchResult=result;
  //     })
  //   }
  // }

  // hideSearch(){
  //   this.searchResult=undefined
  // }
  reloadCurrentPage() {
    window.location.reload();
  }

}


