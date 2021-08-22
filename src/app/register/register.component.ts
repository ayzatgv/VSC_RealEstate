import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  DoRegister(): void {
    this.userService.userRegister(this.user).subscribe(
      data => {
        alert("Success.");
        this.router.navigate(['login']);
      },
      error => {
        alert("Failed.");
      }
    );
  }
}