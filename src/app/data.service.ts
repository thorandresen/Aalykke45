import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _jsonURL = 'assets/json/data.json';
  jsonObject: any;
  private eventCallback = new Subject<string>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream

  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe(data => {
      this.jsonObject = data;
      this.eventCallback.next(this.jsonObject);
    }
    )
  }
  getData() {
    return this.jsonObject;
  }
}
