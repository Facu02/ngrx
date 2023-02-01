import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/types';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  token = this.auth.getToken()

  constructor(private http: HttpClient, private auth: AuthService) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:`Bearer ${this.token}`
    }),
  };

  

  
}
