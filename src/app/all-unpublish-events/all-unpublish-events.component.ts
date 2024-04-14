import { Component } from '@angular/core';
import { EventInfo } from 'src/Models/EventInfo';
import { EventService } from '../Services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-unpublish-events',
  templateUrl: './all-unpublish-events.component.html',
  styleUrls: ['./all-unpublish-events.component.css']
})
export class AllUnpublishEventsComponent {
  events!:EventInfo[]
  public constructor(private eventService:EventService,private router :Router){


  }

  ngOnInit(): void {
    this.eventService.getAllNotPublishEvents().subscribe(
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
