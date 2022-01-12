import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Subject, catchError, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'response' })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Errorboy'))
  }

  sendBooking(payload: any) {
    return new Promise((res, rej) => {
      this.http.post('http://127.0.0.1:3000/booking', JSON.stringify(payload), this.httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(
        resp => res(resp),
        erro => rej(erro)
      );

    });
  }
}
