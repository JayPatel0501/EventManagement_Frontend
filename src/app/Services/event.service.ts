import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventInfo } from 'src/Models/EventInfo';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient,private router:Router) {

  }
  baseURL: string = "https://localhost:44375/";
  addEvent(event:EventInfo): Observable<any>{
    event.Flag="INSERT"
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(event);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'EventInfo/AddEvent', body,{'headers':headers})
  }
  getAll(): Observable<any>{
    let event=new EventInfo()
    event.Flag="GETALL"
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(event);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'EventInfo/GetAllEvent', body,{'headers':headers})

  }

  PublishEvent(EventId:number): Observable<any>{
    let event=new EventInfo()
    event.Flag="UPDATE"
    event.EventId=EventId
    event.Publish=true
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(event);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'EventInfo/UpdateEventByEventId', body,{'headers':headers})
  }
  getAllNotPublishEvents(): Observable<any>{
    let event=new EventInfo()
    event.Flag="NOTPUBLISHEVENTS"
    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(event);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'EventInfo/GetNotPublishEvents', body,{'headers':headers})

  }

  getEventByEventId(EventId:number): Observable<any>{
    let event=new EventInfo()
    event.Flag="GETEVENTBYID"
    event.EventId=EventId

    const headers = { 'content-type': 'application/json','Accept': 'application/json'}
    const body=JSON.stringify(event);
    console.log("Body")
    console.log(body)

    return this.http.post(this.baseURL + 'EventInfo/GetAllEvent', body,{'headers':headers})

  }

}
