import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'response' })
  };

  sendBooking(payload: any) {
    return new Promise((res, rej) => {
      this.http.post('http://127.0.0.1:3000/booking', JSON.stringify(payload), this.httpOptions).subscribe(data => {
        if (data == '200') {
          res('200');
        } else {
          rej('500');
        }
      });
    });
  }
}
