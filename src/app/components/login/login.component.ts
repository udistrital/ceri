import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = null;

  credenciales= {
        'user': '',
        'password': ''
    };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['/landing']);
  }

}
