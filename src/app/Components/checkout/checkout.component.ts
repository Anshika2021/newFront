import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControlName, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/Service/cart.service';
import { CheckoutService } from 'src/app/Service/checkout.service';
import { SnackbarService } from 'src/app/Service/snackbar.service';
import { GlobalConstants } from '../../shared/GlobalConstrants';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/Service/catalog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment.prod';
// import { Socket } from 'socket.io-client';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
deliveryDetail:any=FormGroup;
cartItems:any;
totalAmount:any =0;
  totalquantity: any;
  httpClient: any;
  // alert: any;
  // totalquantity: any;


  constructor(public catalogService:CatalogService,public dialogref:MatDialogRef<CheckoutComponent>, private dialog:MatDialog,private formBuilder :FormBuilder, private cartService:CartService,private checkOutService :CheckoutService,private snackBarService:SnackbarService,private router:Router)
  {
    this.deliveryDetail = this.formBuilder.group({
      name: ['', [Validators.required, Validators .pattern(GlobalConstants.nameRegex)]],
      contactNumber: ['', [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  

  payment()
  {
    //const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = "600px";
     //dialogConfig.height="500px";
     //this.dialog.open(PaymentComponent);
     for(let i=0;i<this.cartItems.length;i++){
      this.cartItems[i]['stock']=this.cartItems[i]['prod_quantity'];
      delete this.cartItems[i]['prod_quantity'];
     
    }
 console.log(this.cartItems);
     this.catalogService.updateStock(this.cartItems).subscribe(res=>{
      alert("Successfull payment done");
      this.router.navigate(['/']);
    
     })

  
     


  }

  ngOnInit(): void {
 
   this.deliveryDetail = this.formBuilder.group({
       name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],
       address:[null,[Validators.required]],
       city:[null,[Validators.required]],
      // state:[''],
       pinCode:[null,[Validators.required,Validators.pattern(GlobalConstants.pinCodeRegex)]]
 
     })
     this.getData();
 this.totalAmount =this.grandAmount();
  
  }

  ngOnChanges()
  {
    let grandTotal =0;
    this.cartItems.map((a:any)=>{
      let num= (+a.prod_price);
      
      console.log(a.prod_price);
      
      grandTotal =grandTotal+num;
    })
    
   
  }
  grandAmount()
  {
    let grandTotal =0;
    this.cartItems.map((a:any)=>{
      let num= (+a.prod_price*a.prod_quantity);
      
        console.log(a.prod_price);
      
      grandTotal =grandTotal+num;

    })
    console.log(grandTotal);
 return grandTotal;

 window.location.reload();

  }


  checkProductQuantity() {
    let isQuantityValid = true;
    let exceededProducts = [];
    console.log(this.cartItems);
    for (let item of this.cartItems) {
      if (item.prod_quantity > item.totalQuantity) {
        isQuantityValid = false;
        exceededProducts.push(item.prod_name);
        // return false;


      

    
        
      }

      if(item.prod_quantity <=0)
      {
        return false ;
      }
    }

    if(!isQuantityValid){
      alert("Quantity exceeded available stock for the following product(s): " + exceededProducts.join(", "));
    }
  
    return isQuantityValid;
    window.location.reload();
  
  }



 

// handleSubmit() {
//   if (!this.checkProductQuantity()) {
//     return;
//   }

//   // Retrieve the cart items from the local storage
//   const cartItems:any = localStorage.getItem('cartItems');
//   var formData = this.deliveryDetail.value;
//   console.log(formData);

//   // Prepare the API request payload
//   const productIds = cartItems.map((item: any) => item.prod_id);
//   const data = {
//     productIds: productIds,
//     name:formData.name,
// contactNumber:formData.contactNumber,
//  address:formData.address,
//  pinCode:formData.pinCode,
//  city:formData.city,
//  userId:localStorage.getItem("cartId")
//   };

//   console.log(localStorage.getItem("cartId"));
//    console.log(data);;
//    this.checkOutService.placeOrder(data).subscribe((res:any)=>{
   
// this.snackBarService.openSnackBar("U re RIght",GlobalConstants.genricError);
// console.log(res?.message);
//    },(error)=>{
//     console.log(error);
//     this.snackBarService.openSnackBar(error?.error.message,GlobalConstants.genricError);
//    })

// // Make the API call to fetch product details
//   this.http.get('prodUrl', data).subscribe(
//     (res: any) => {
//       // Handle the API response here
//       console.log(res);
//       // Perform payment process here
//       this.payment();
//     },
//     (error: any) => {
//       console.log(error);
//     }
//   );
//   this.dialogref.close()
//   this.payment();
//   }
  
//   cartItemsprod_quantity(cartItemsprod_quantity: any) {
//     throw new Error('Method not implemented.');
//   }






  
  
  
handleSubmit()
{
// if (!this.checkProductQuantity()) {
//   // alert("Quantity exceeded available stock");
//   console.log(this.checkProductQuantity());

  
//     return;

//   }


let isQuantityExceed= false;
let error= " :  ";

for(let i=0;i<this.cartItems.length;i++){
  this.catalogService.getProductByName(this.cartItems[i].prod_name).subscribe(res=>{
    if(res[0].stock<this.cartItems[i].prod_quantity){
      isQuantityExceed=true;
      error= error+this.cartItems[i].prod_name;
      // alert("Quantity Exceeded"+ this.cartItems[i].prod_name);
    }
    if(isQuantityExceed && i==this.cartItems.length-1){
      alert("Quantity Excedded of "+ error);
    }
    if(!isQuantityExceed && i==this.cartItems.length-1){
      var formData = this.deliveryDetail.value;
      console.log(formData);
      // const productIds = this.cartItems.map((item: any) => item.prod_id);
       var data={
    name:formData.name,
    contactNumber:formData.contactNumber,
     address:formData.address,
     pinCode:formData.pinCode,
     city:formData.city,
     userId:localStorage.getItem("cartId"),
    //  productIds: productIds
    
     }
    
      console.log(localStorage.getItem("cartId"));
       console.log(data);
    
    this.checkOutService.placeOrder(data).subscribe((res:any)=>{
       
    this.snackBarService.openSnackBar("U re RIght",GlobalConstants.genricError);
    console.log(res?.message);
       },(error)=>{
        console.log(error);
        this.snackBarService.openSnackBar(error?.error.message,GlobalConstants.genricError);
       })
       this.dialogref.close()
    this.payment();
     }
    console.log(res);

  });
}



}
cartItemsprod_quantity(cartItemsprod_quantity: any) {
  throw new Error('Method not implemented.');
}



// quantity()
// {
//   console.log();
//   window.location.reload();
//   this.cartService.getUserCart(localStorage.getItem('cartId')).subscribe((res)=>{
//     this.cartItems = res;
//     // console.log(res);
//     this.cartItems.map((a:any)=>{
//       this.totalquantity *= a.prod_price;
//       console.log(this.totalquantity);

// })

//   })
//   }

// quantity(item:any)
//   {
//     if(item.prod_quantity <=0)


//     })
//     console.log(quantity);
//  return quantity;

//  window.location.reload();

//   }
 


getData()
{
  this.cartService.getUserCart(localStorage.getItem('cartId')).subscribe((res)=>{
    this.cartItems = res;
    console.log(res);
    this.cartItems.map((a:any)=>{
      this.totalAmount +=+ a.prod_price;

      
      // this.totalAmount = this.totalAmount+this.cartItems[a].price;

      })
      



  })

 
}





}
