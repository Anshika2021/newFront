import { supportsScrollBehavior } from '@angular/cdk/platform';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartApi='http://localhost:8087';

public cartItemList:any;
// public prod_id: any;
  // public productList = new BehaviorSubject<any>([]);

  // public search = new BehaviorSubject<string>("");
  // searchUrl: string | undefined;

  public productName = new BehaviorSubject<any>("");


  constructor(private httpClient:HttpClient) { 



  }
  getUserCart(id:any)
{
    return this.cartItemList=this.cartItemList=this.httpClient.get(this.cartApi + "/cart/getUserCart/"+id);
} 


add(item:any)
{
  item['prod_quantity'] = 1;
  item['total'] = item.prod_price;
  item['userId'] = localStorage.getItem("cartId");
  console.log(localStorage.getItem("cartId"));
return this.httpClient.post(this.cartApi+"/cart/add/" ,item,{
  headers:new HttpHeaders().set('Content-Type', 'application/json')
})
}
addItems(data:any, id:any)
{
return this.httpClient.post(this.cartApi+"/add/cart/"+id ,data,{
  headers:new HttpHeaders().set('Content-Type', 'application/json')
})
}

deleteCartItems(cartItemId:any)
{
  return this.httpClient.get(this.cartApi+"/cart/deleteCartItem/"+cartItemId );
  // this.productList.next(this.cartItemList);
}
// deleteAllByUserId(id:any){
//   return this.httpClient.get(this.cartApi+"/cart/deleteAllByUserId"+id);
//   this.productList.next(this.cartItemList);

//  }
totalAmountCart()
{ var totam=0;
  this.cartItemList.map((a:any)=>{
totam+= a.prod_price;
  })
 return totam;
}

// searchProduct(query:string){
//   return  this.httpClient.get(this.searchUrl+ "/product/search/" +query);

// }

setProduct(products: any){
  this.productName.next(products)

}
getProduct(){
  return this.productName;
}


updateQuantity(data:any){
  return this.httpClient.put(this.cartApi+"/cart/cart/update/",data,{
    headers:new HttpHeaders().set('Content-Type', 'application/json')
  
})
}


// removeCartItem(product: any){
//   this.cartItemList.map((a:any, index:any)=>{
// if(product.id=== a.id){
//   this.cartItemList.splice(index,1);

// }
//   })
// }

// removeAllCart(){

// }

}
