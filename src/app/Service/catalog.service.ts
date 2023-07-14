import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// @Injectable({
//   providedIn: 'root'
// })
export class CatalogService {
  // lastName(lastName: any) {
  //   throw new Error('Method not implemented.');
  // }
  
list=new EventEmitter<any>();
name:any;
productS:any;
 catUrl='http://localhost:8085';
 prodUrl='http://localhost:8084';
searchUrl='http://localhost:9093';
  constructor(private httpClient:HttpClient) { }

  category()
  {
   return this.httpClient.get(this.catUrl + "/category/getCategories")
  }

  getProductByCategory(id:any)
  {
    return this.httpClient.get(this.catUrl + "/category/getCategoryProducts/"+id);
  }
  getAllCategoryProducts()
  {
    return this.httpClient.get(this.prodUrl + "/product/view");
  }

  searchByName(name:string)
{
  console.log(name);
   this.name = name;

  // const [firstName, lastName] = name.split(' ');

  // Construct the search URL using first name and last name
  // const searchUrl = `${this.searchUrl}/product/search/${firstName}/${lastName}`;
  // this.httpClient.get(this.searchUrl+ "/product/search/
 console.log(this.list.emit(name));
//  return  this.httpClient.get<any[]>(searchUrl);

  return  this.httpClient.get<any[]>(this.searchUrl+ "/product/search/"+name);
}

// searchByLastName(lastName: string) {
//   console.log(lastName);
//   // Assign the last name to the 'name' property
//   this.name = lastName;
  
//   // Emit the last name using the 'list' event
//   this.list.emit(lastName);

//   // Use the last name in the search URL to fetch the products
//   return this.httpClient.get<any[]>(this.searchUrl + "/product/search?lastName=" + lastName);
// }


searchProduct(query:string){
  return  this.httpClient.get<CatalogService[]>('http://localhost:3000/product/search?q=${query}')

}

getProductByName(name: any)
{
  console.log(name);
   this.name = name;

 
 console.log(this.list.emit(name));

  return  this.httpClient.get<any[]>(this.prodUrl+ "/product/getByName/"+name);
}

updateStock(data:any){
  return this.httpClient.put(this.prodUrl+"/product/product/update/",data,{
    headers:new HttpHeaders().set('Content-Type', 'application/json')
  })
  }
getname()
{
  console.log( "hello", this.name);
}
}
