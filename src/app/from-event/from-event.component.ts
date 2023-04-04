import { Component } from '@angular/core';
import { filter, from, pluck } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent {
  dataArray: any[] = [];
  constructor() { }

  ngOnInit() {
    const userData = [
      { name: "Rahul", age: 20, email: 'rahul@gmail.com' },
      { name: "Sonu", age: 18, email: 'sonu@gmail.com' },
      { name: "Keshav", age: 22, email: 'keshav@gmail.com' }];

    const observable1 = from(userData);
    observable1.pipe(
      filter((res) => res.age >= 22)
    ).subscribe((response) => {
      console.log(response);
      this.dataArray.push(response);
    });

  }
}
