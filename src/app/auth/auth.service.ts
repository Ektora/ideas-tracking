import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = new BehaviorSubject<User>(undefined);
  private _baseUrl = `${environment.baseUrl}/auth`;
  private readonly loggedInUserKey = "loggedInUser";

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post<User>(`${this._baseUrl}/login`, {email, password}).pipe(
      tap(user => {
        this.storeUserAfterLogin(user);
        this._currentUser.next(user);
      })
    );
  }

  logout(){

  }

  isLoggedIn(){
    return this._currentUser.getValue() !== undefined;
  }

  get currentUser() {
    return this._currentUser.asObservable();
  }

  private storeUserAfterLogin(user: User){
    localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
  }

  private clearLocalStorage(){
    localStorage.removeItem(this.loggedInUserKey);
  }

}
