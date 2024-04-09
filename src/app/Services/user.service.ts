import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseURL: string = "https://localhost:44375/";
  register(user:User): Observable<any>{
      user.Flag="INSERT"
      const headers = { 'content-type': 'application/json','Accept': 'application/json'}
      const body=JSON.stringify(user);
      console.log("Body")
      console.log(body)

      return this.http.post(this.baseURL + 'User/Register', body,{'headers':headers})

  }

  login(user:User):Observable<any>{
    user.Flag="LOGIN"
    const headers={'content-type':'application/json','Accept':'appliction/json'}
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseURL+"User/Login",body,{'headers':headers})
  }
}
