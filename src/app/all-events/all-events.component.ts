import { Component } from '@angular/core';
import { EventService } from '../Services/event.service';
import { EventInfo } from 'src/Models/EventInfo';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {
  events!:EventInfo[]
  public constructor(private eventService:EventService,private router :Router){


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
  }
}
