import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) { }

  //Register page

  user_register(formdata:FormData):Observable<boolean>{
    return this.http.post<boolean>(this.apiUrl + 'user_register',formdata);
  } 
}
