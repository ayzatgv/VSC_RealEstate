import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: User
  
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();

    if (this.userService.HasToken() != null) {
      this.userService.userGet().subscribe(
        data => {
          this.user = data;
        }
      );
    }
  }
  DoUpdate(): void {
    this.userService.userUpdate(this.user).subscribe(
      data => {
        alert("Success.");
      },
      error => {
        alert("Failed.");
      }
    );
  }
  DoLogout(): void {
    this.userService.RemoveToken();
    alert("Logged out.");
    this.router.navigate(['login']);
  }
}
