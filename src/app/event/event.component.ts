import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { EventInfo } from 'src/Models/EventInfo';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events!:EventInfo[];
  NotPublishEvent!:EventInfo[];
  public constructor(private eventService:EventService){
   

  }
  ngOnInit(): void {
    this.eventService.getAll().subscribe(
      (response)=>{
        console.log(response)
        this.events=response.ArrayOfResponse
        console.log(this.events)

      },
      (error)=>{
        console.log(error)
      }
    )
    this.eventService.getAllNotPublishEvents().subscribe(
      (response)=>{
        console.log(response)
        this.NotPublishEvent=response.ArrayOfResponse
        console.log(this.NotPublishEvent)

      },
      (error)=>{
        console.log(error)
      }
    )
  }



}
