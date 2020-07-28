import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  data:any={};
  masuk(data)
  {
    if(data.username == 'flndn@gmail.com',data.password == '123')
    {
      this.router.navigate(['/buku-alamat']);
    }
    if(data.username == 'mrtngrx@gmail.com',data.password == '123')
    {
      this.router.navigate(['/buku-alamat']);
    }
    if(data.username == 'joooeee@gmail.com',data.password == '123')
    {
      this.router.navigate(['/buku-alamat']);
    }

  {
    if(data.username == null,data.password == 'null'){
      alert("Email must be filled!")
    }
  }
  {
    if(data.username == 'Wrong'){
      alert("Email wrong or not registered yet!")
    }
  }
  {
    if(data.password == null){
      alert("Password must be filled!")
    }
  }

    }}