import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { DataUtilityService } from '../services/data-utility.service';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  styleUrls: ['./interval-operator.component.css']
})
export class IntervalOperatorComponent {
  items:any;
  constructor(private _apiService : DataUtilityService){}
  ngOnInit() {
   const pollInterval = interval(2000);
   const subscription = pollInterval.subscribe(()=>{
      this._apiService.getUsers().subscribe((response)=>{
        this.items = response;  
        if(response.id==10){
          subscription.unsubscribe();
        }   
    })  
   });  
  }
}
