import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/Models/Admin';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }
  baseURL: string = "https://localhost:44375/";
  register(admin:Admin): Observable<any>{
      admin.Flag="INSERT"
      const headers = { 'content-type': 'application/json','Accept': 'application/json'}
      const body=JSON.stringify(admin);
      console.log("Body")
      console.log(body)

      return this.http.post(this.baseURL + 'Admin/Register', body,{'headers':headers})

  }

  login(admin:Admin):Observable<any>{
    admin.Flag="LOGIN"
    const headers={'content-type':'application/json','Accept':'appliction/json'}
    const body=JSON.stringify(admin);
    console.log(body)
    return this.http.post(this.baseURL+"Admin/Login",body,{'headers':headers})
  }
}
