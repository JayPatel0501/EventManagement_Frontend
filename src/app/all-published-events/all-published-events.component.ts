import { Component } from '@angular/core';
import { EventService } from '../Services/event.service';
import { Router } from '@angular/router';
import { EventInfo } from 'src/Models/EventInfo';

@Component({
  selector: 'app-all-published-events',
  templateUrl: './all-published-events.component.html',
  styleUrls: ['./all-published-events.component.css']
})
export class AllPublishedEventsComponent {
  events!:EventInfo[]
  public constructor(private eventService:EventService,private router :Router){


  }

  ngOnInit(): void {
    this.eventService.getAllPublishedEvent().subscribe(
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
