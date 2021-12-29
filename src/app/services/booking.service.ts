import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  body = JSON.stringify({
    hej: 'med dig'
  });
  header = new Headers({
    'Content-Type': 'application/json'
  });
  sendBooking() {
    this.http.post('http://127.0.0.1:3000/booking', this.body, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    })
  }
}
