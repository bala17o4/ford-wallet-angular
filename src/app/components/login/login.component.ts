import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  wallet:Wallet = new Wallet();

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private walletService: WalletService) { }
  name?:string;
  password?:string;
  id?:string;
  refer:Wallet = new Wallet();
  errmsg?:string|null = "";
  onSubmit(id?:string,name?:string,password?:string){
    this.walletService.getWalletById(id!).subscribe(
      {
        next:(data)=>{
          this.refer = data;
          if(this.refer.name == name && this.refer.password == password){
            this.router.navigateByUrl('/wallet');
          }else{
            this.errmsg = "Name or Password wrong";
          }
        }
      }
    )
  }

  back(){
    this.router.navigateByUrl('/home');
  }

}
