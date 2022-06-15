import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html', 
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  lists;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
      this.getList();
  }

  getList() {
    const api = 'https://reqres.in/api/users?page=2';
      this.http.get(api).subscribe((res: any) => {
        this.lists = res['data'];
      })
  }

  logoutAction() {
    localStorage.removeItem('loggedIn');
    this.router.navigateByUrl('/login');
  }

}
