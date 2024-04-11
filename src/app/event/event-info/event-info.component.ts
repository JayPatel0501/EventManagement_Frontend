import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  activityInfoForm =new FormGroup({
   
    
    ActivityName: new FormControl(),
    ActivityDESC: new FormControl(),
    ActivityStartDate : new FormControl(),
    ActivityEndDate : new FormControl(),
    ActivityPrice: new FormControl(),
    
  }
  )

  constructor( private route:ActivatedRoute,private activityService:ActivityServiecService,private eventService:EventService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.EventId = params["id"];
      this.setEventInfo();
      this.setActivityDetails();

  });
   
  }
  setEventInfo(){
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
  setActivityDetails(){
    console.log(" set activity ")
    this.activityService.GetAllActivityByEventId(this.EventId).subscribe(
      (response)=>{
        this.activities=response["ArrayOfResponse"]
        console.log(this.activities);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  OnPublish(){
    this.eventService.PublishEvent(this.EventId).subscribe(
      (response)=>{
        console.log(response);
        this.setActivityDetails();
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }


  OnSubmit(){
    let activityInfo=new ActivityInfo();
    activityInfo.ActivityName=this.activityInfoForm.controls.ActivityName.value;
    activityInfo.ActivityDESC=this.activityInfoForm.controls.ActivityDESC.value;
    activityInfo.ActivityStartDateTime=this.activityInfoForm.value.ActivityStartDate;
    activityInfo.ActivityEndDateTime=this.activityInfoForm.value.ActivityEndDate;
    activityInfo.ActivityPrice=this.activityInfoForm.controls.ActivityPrice.value;
    activityInfo.EventId=this.EventId
    this.activityService.AddActivity(activityInfo).subscribe(
      (response)=>{
        console.log(response);
        this.setActivityDetails();
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }

}
