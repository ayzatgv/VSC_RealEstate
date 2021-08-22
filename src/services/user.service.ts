import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = "https://localhost:44330/api/user/";

  constructor(private http: HttpClient) { }

  HasToken(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }
  RemoveToken(): void {
    localStorage.removeItem('token');
  }

  userLogin(user: User): Observable<string> {
    return this.http.post<string>(this.serverUrl + "Login", { username: user.username, password: user.password });
  }
  userGet(): Observable<User> {
    return this.http.get<User>(this.serverUrl + "Get");
  }
  userUpdate(user: User): Observable<any> {
    return this.http.put<any>(this.serverUrl + "Update", { firstname: user.firstname, lastname: user.lastname, username: user.username, phone: user.phone });
  }
  userRegister(user: User): Observable<any> {
    return this.http.post<any>(this.serverUrl + "Register", { firstname: user.firstname, lastname: user.lastname, username: user.username, password: user.password, phone: user.phone });
  }
}
