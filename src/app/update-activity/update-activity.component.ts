import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivityInfo } from 'src/Models/ActivityInfo';
import { EventInfo } from 'src/Models/EventInfo';
import { ActivityServiecService } from '../Services/activity-serviec.service';
import { ResponseMessage } from 'src/Models/ResponseMessage';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit{

  @Input() eventInfo!:EventInfo;
  responseMessage = new ResponseMessage()
  @Input('selectedActivityInfo') activityInfo!:ActivityInfo;
  constructor(private fb:FormBuilder,private activityService:ActivityServiecService){
  
  }
  activityInfoUpdateForm=this.fb.group({
    ActivityName: new FormControl('',[Validators.email,Validators.required]),
    ActivityDESC: new FormControl('',[Validators.required]),
    ActivityStartDate : new FormControl('',[Validators.required]),
    ActivityEndDate : new FormControl('',[Validators.required]),
    ActivityPrice: new FormControl('',[Validators.required]),
  })
 ngOnInit(): void {
  console.log("skdhsdh");
 
  console.log(this.eventInfo)
  console.log(this.activityInfo)
  this.activityInfoUpdateForm.patchValue({
    ActivityName: this.activityInfo.ActivityName, 
    ActivityDESC: this.activityInfo.ActivityDESC,
    ActivityStartDate : this.activityInfo.ActivityStartDateTime,
    ActivityEndDate :this.activityInfo.ActivityEndDateTime,
    ActivityPrice: this.activityInfo.ActivityPrice
  })
  
 }
  OnSubmit(){
    console.log("asjddfhsafhfhfhsfsdfh")
    let activityInfo = new ActivityInfo();
    activityInfo.ActivityName != this.activityInfoUpdateForm.controls.ActivityName.value;
    activityInfo.ActivityDESC != this.activityInfoUpdateForm.controls.ActivityDESC.value;
    activityInfo.ActivityStartDateTime != this.activityInfoUpdateForm.value.ActivityStartDate;
    activityInfo.ActivityEndDateTime != this.activityInfoUpdateForm.value.ActivityEndDate;
    activityInfo.ActivityPrice != this.activityInfoUpdateForm.controls.ActivityPrice.value;
    activityInfo.EventId != this.activityInfo.EventId



      this.activityService.UpdateActivity(activityInfo).subscribe(
        (response) => {
          console.log(response);

          if (response.Message == "Event Updated Successfully") {
            this.responseMessage.Message = "Activity Upadeted Successfully"
            this.responseMessage.StatusCode = 200

          } else {
            this.responseMessage.Message = response.Message
            this.responseMessage.StatusCode = 500
            console.log(this.responseMessage)
          }

          setTimeout(() => {
            this.responseMessage.Message = "Null"
            this.responseMessage.StatusCode = 0
            // this.router.navigate(["dashboard/allevents"])
          }, 1000);
         
        }
        ,
        (error) => {
          console.log(error);
        }
      )
   
   
  }

}
