import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventInfo } from 'src/Models/EventInfo';
import { EventService } from 'src/app/Services/event.service';


@Component({
  selector: 'app-add-envent',
  templateUrl: './add-envent.component.html',
  styleUrls: ['./add-envent.component.css']
})
export class AddEnventComponent  {
 
  constructor(private eventService:EventService){

  }
  file:any;
  fileBase64Db!:string
  addEventForm=new FormGroup({
    
    EventName:new FormControl(),
    EventDESC:new FormControl(),
    EventStartDate :new FormControl(),
    EventEndDate : new FormControl(),
    
   
    
  })
  OnSubmit(){
    console.log(this.addEventForm.value)
    let eventInfo=new EventInfo()
    eventInfo.EventName=this.addEventForm.controls["EventName"].value;
    eventInfo.EventDESC=this.addEventForm.controls["EventDESC"].value;
    eventInfo.EventStartDate=this.addEventForm.controls["EventStartDate"].value;
    eventInfo.EventEndDate=this.addEventForm.controls["EventEndDate"].value;
    eventInfo.EventImgPath=this.file
    eventInfo.AdminId=2                // static Admin Id

    this.eventService.addEvent(eventInfo).subscribe(
      (response)=>{
         console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )

  }
  
  uploadImage(event: any) {
    console.log("entered")
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
    const base64String = reader.result as string;
      console.log(base64String)
    this.file=base64String.split(",")[1];
    console.log(this.file)
    }
    if (file) {
      reader.readAsDataURL (file);
      }
    
}

}