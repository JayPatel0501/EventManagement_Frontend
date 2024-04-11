import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityInfo } from 'src/Models/ActivityInfo';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiecService {

  constructor(private http:HttpClient) { }
  baseURL:string="https://localhost:44375/"
  
  GetAllActivityByEventId(EventId:number): Observable<any>{
    console.log("activityInfo details")
    let activityInfo=new ActivityInfo()
    activityInfo.Flag="GETBYEVENTID"
    activityInfo.EventId=EventId
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(activityInfo);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'ActivityInfo/GetActivityByEventId', body,{'headers':headers})
  }
  AddActivity(activityInfo: ActivityInfo): Observable<any>{
  
  
    activityInfo.Flag="INSERT"
    
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(activityInfo);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'ActivityInfo/AddActivity', body,{'headers':headers})
  }
}
