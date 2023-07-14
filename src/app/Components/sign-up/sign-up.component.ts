import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from '../../Service/snackbar.service';

import { UserService } from '../../Service/user.service';
import { GlobalConstants } from '../../shared/GlobalConstrants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit  {

  
  password = true;
  confirmPassword = true;
  signupForm:any = FormGroup
  responseMessage:any;
  constructor(private formBuilder:FormBuilder, private router:Router,
    private userService:UserService,
   private snackBarService:SnackbarService,
   private snackBar : MatSnackBar){ }
   //public dialogRef:MatDialogRef<SignUpComponent>){ }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber:[null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]]
      
    })
  }

  validateSubmit()
  {

    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value)
    {
      return true;
    }
    else{
      return false
    }

  }


  handleSubmit()//when someone hit signup it will come here and all the data will be fetched in data
  {
    var formData = this.signupForm.value;
    var data = {
      name:formData.name,
      email:formData.email,
      contactNumber:formData.contactNumber,
      password:formData.password
    }
    //now the data will 
    this.userService.signup(data).subscribe((response:any)=>{
      //this.dialogRef.close();
      this.responseMessage = response?.message;
      this.snackBarService.openSnackBar(this.responseMessage,"");
      //Swal.fire('Success', 'user is successfully Registered', 'success')
      this.router.navigate(['login']);
    },(error)=>{
      if(error.error?.message)
      {
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genricError;
      }
      this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }



}
