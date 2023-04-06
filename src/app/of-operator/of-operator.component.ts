import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataUtilityService } from '../services/data-utility.service';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit{  
  constructor(private _print: DataUtilityService){}
  ngOnInit() {
    const Observable1 = of('Rahul', 'Rakesh', 'Rajiv');
    //const Observable1 = of(['Rahul', 'Rakesh', 'Rajiv']);
    //const Observable1 = of({a:'Rahul', b:'Rakesh', c:'Rajiv'});


    Observable1.subscribe((response)=>{
      console.log(response);
      
     this._print.printList(response, 'el-container');
    });
  }
}
