import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginInput, LoginResult, RegisterInput } from '../models/auth';
import { User } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('accessToken');
  }

  logIn(loginInput: LoginInput): Observable<LoginResult> {
    return this.http
      .post<LoginResult>(`${environment.API_URL}/auth/login`, loginInput)
      .pipe(
        map((res: LoginResult) => {
          return res;
        }),
        catchError((err) => {
          return this.handleLoginError(err);
        })
      );
  }

  private handleLoginError(err: HttpErrorResponse): Observable<never> {
    if (err.status == 401) {
      return throwError(() => new Error('Usuario o contraseña incorrecta'));
    }
    return throwError(() => new Error('Ha ocurrido un error'));
  }

  logOut() {
    localStorage.removeItem('accessToken');
  }

  signUp(data: RegisterInput): Observable<User> {
    return this.http
      .post<User>(`${environment.API_URL}/users`, data)
      .pipe(
        map((res: User) => {
          return res;
        }),
        catchError((err) => {
          return this.handleSignUpError(err);
        })
      );
  }

  handleSignUpError(err:HttpErrorResponse){
    // TODO
    console.log(err)
    return throwError(()=>new Error())
  }

  getUserLogged():Observable<User>{

    return this.http.get<User>(`${environment.API_URL}/auth/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${this.getToken()}`
      }
    });
  }
}
