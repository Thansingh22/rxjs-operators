import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  styleUrls: ['./interval-operator.component.css']
})
export class IntervalOperatorComponent {
  constructor(private _apiService : DataService){}
  ngOnInit() {
   const pollInterval = interval(2000);
   pollInterval.subscribe(()=>{
      this._apiService.msgData();
   });
  }
}
