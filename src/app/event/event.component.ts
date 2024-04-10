import { Component } from '@angular/core';
import { EventService } from '../Services/event.service';
import { EventInfo } from 'src/Models/EventInfo';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events!:EventInfo[];
  public constructor(private eventService:EventService){
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

  }


}
