import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { ActivityInfo } from 'src/Models/ActivityInfo';
import { EventInfo } from 'src/Models/EventInfo';
import { ResponseMessage } from 'src/Models/ResponseMessage';
import { ActivityServiecService } from 'src/app/Services/activity-serviec.service';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  role!:string;
  EventId!:number;
  eventInfo!:EventInfo;
  activities!:ActivityInfo[];
  EventImageBase64DB!:string;
  selecttedOpration:string="ShowActivity"
  ChageOption:string="AddActivity"
  responseMessage=new ResponseMessage()

  onChageOpration(){
    if(this.selecttedOpration=="ShowActivity"){

      this.selecttedOpration="AddActivity";
      this.ChageOption="ShowActivity";
    }
    else{
      this.selecttedOpration="ShowActivity";
      this.ChageOption="AddActivity";
    }
  }

  activityInfoForm =new FormGroup({
   
    
    ActivityName: new FormControl('',[Validators.email,Validators.required]),
    ActivityDESC: new FormControl('',[Validators.required]),
    ActivityStartDate : new FormControl('',[Validators.required]),
    ActivityEndDate : new FormControl('',[Validators.required]),
    ActivityPrice: new FormControl('',[Validators.required]),
    
  }
  )

  get validation(){
    return this.activityInfoForm.controls
  }

  constructor( private route:ActivatedRoute,private activityService:ActivityServiecService,private eventService:EventService){
    if(sessionStorage.getItem("isUserLogin")=='true'){
      this.role="User"
     }
     else if(sessionStorage.getItem("isAdminLogin")=='true'){
      this.role="Admin"
     }
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
       debugger
        if(response.Message=="Event Updated Successfully"){
          this.responseMessage.Message="Event Publish SuccessFully"
          this.responseMessage.StatusCode=200
         
        }else{
          this.responseMessage.Message=response.Message
          this.responseMessage.StatusCode=500
          console.log(this.responseMessage)
        }

        setTimeout(() => {
          this.responseMessage.Message="Null"
          this.responseMessage.StatusCode=0
          // this.router.navigate(["dashboard/allevents"])
        }, 1000);


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
    activityInfo.ActivityName!=this.activityInfoForm.controls.ActivityName.value;
    activityInfo.ActivityDESC!=this.activityInfoForm.controls.ActivityDESC.value;
    activityInfo.ActivityStartDateTime!=this.activityInfoForm.value.ActivityStartDate;
    activityInfo.ActivityEndDateTime!=this.activityInfoForm.value.ActivityEndDate;
    activityInfo.ActivityPrice!=this.activityInfoForm.controls.ActivityPrice.value;
    activityInfo.EventId!=this.EventId
    if(!this.activityInfoForm.invalid){

    
    this.activityService.AddActivity(activityInfo).subscribe(
      (response)=>{
        console.log(response);

        if(response.Message=="Activity Inserted Successfully"){
          this.responseMessage.Message="Activity Inserted Successfully"
          this.responseMessage.StatusCode=200
         
        }else{
          this.responseMessage.Message=response.Message
          this.responseMessage.StatusCode=500
          console.log(this.responseMessage)
        }

        setTimeout(() => {
          this.responseMessage.Message="Null"
          this.responseMessage.StatusCode=0
          // this.router.navigate(["dashboard/allevents"])
        }, 1000);
        this.setActivityDetails();
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }
  else{
    this.responseMessage.Message="Form Invalid Inputs"
    this.responseMessage.StatusCode=500
    setTimeout(() => {
      this.responseMessage.Message="Null"
      this.responseMessage.StatusCode=0
      // this.router.navigate(["dashboard/allevents"])
    }, 1000);

  }
  }
}
