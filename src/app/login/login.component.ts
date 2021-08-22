import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  DoLogin(): void {
    this.userService.userLogin(this.user).subscribe(
      data => {
        alert("Success.");
        localStorage.setItem('token', data);
        this.router.navigate(['dashboard/home']);
      },
      error => {
        alert("Failed.");
      }
    );
  }
}
