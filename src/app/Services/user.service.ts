import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  baseURL: string = "https://localhost:44317/api/";
  register(user:User): Observable<any>{

      const headers = { 'content-type': 'application/json','Accept': 'application/json'}  
      const body=JSON.stringify(user);
      console.log("Body")
      console.log(body)
      return this.http.post(this.baseURL + 'User/CreateUser', body,{'headers':headers})
    
  }
}
