import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUtilityService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _client : HttpClient) { }

  printList(val:any, containerID:any){
    let element = document.createElement('li');
    element.innerText = val;
    document.getElementById(containerID)?.appendChild(element);
  }

  getUsers(): Observable<any>{
    return this._client.get<any>(this.apiUrl);
  }
}


