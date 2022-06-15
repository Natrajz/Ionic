import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,    
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['eve.holt@reqres.in', Validators.required],
      password: ['cityslicka', Validators.required],
    })
  }

  login() {
    console.log('this.loginForm ', this.loginForm.value)
    if (this.loginForm.valid) {
      const api = "https://reqres.in/api/login";
      this.http.post(api, this.loginForm.value).subscribe((res) => {
          this.router.navigateByUrl('/dashboard');
          localStorage.setItem('loggedIn', 'true');
      })
    }
    
  }

  


}
