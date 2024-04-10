import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ActivityInfo } from 'src/Models/ActivityInfo';
import { EventInfo } from 'src/Models/EventInfo';
import { ActivityServiecService } from 'src/app/Services/activity-serviec.service';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  EventId!:number;
  eventInfo!:EventInfo;
  activities!:ActivityInfo[];
  EventImageBase64DB!:string

  constructor( private route:ActivatedRoute,private activityService:ActivityServiecService,private eventService:EventService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.EventId = params["id"];
      this.setEventInfo();
      this.setActivityDetails();

  });
   
  }
  setActivityDetails(){
    this.eventService.getEventByEventId(this.EventId).subscribe(
      (response)=>{
        this.eventInfo=response.ArrayOfResponse[0];
        console.log(this.eventInfo);
        this.EventImageBase64DB=this.eventInfo.EventImgPath
        


      },
      (error)=>{
        console.log(error);
      }
    )
  };
  setEventInfo(){
    this.eventService.getEventByEventId(this.EventId).subscribe(
      (response)=>{
        this.activities=response.ArrayOfResponse
        console.log(this.activities);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
