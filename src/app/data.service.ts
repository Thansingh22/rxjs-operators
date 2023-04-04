import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _client : HttpClient) { }

  printList(val:any, containerID:any){
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById(containerID)?.appendChild(element);
  }

  msgData(){
    console.log("Hello Api Call Every 5sec");    
  }

}
