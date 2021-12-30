import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BookingService } from '../services/booking.service'
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  jsonObject: any;
  weekText: string = '';
  weekendText: string = '';
  commentinput: string = '';
  bookingForm: FormGroup;
  isSubmitted: boolean = false;
  bookingService: BookingService;

  constructor(private dataService: DataService, private _bookingService: BookingService) {
    this.bookingService = _bookingService;
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.weekText = this.jsonObject.booking.weekPrice;
      this.weekendText = this.jsonObject.booking.weekendPrice;
    });

    this.bookingForm = new FormGroup({
      nameInputControl: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      emailInputControl: new FormControl('',
        [
          Validators.required
        ]
      ),
      phoneInputControl: new FormControl(
        '',
        [
          Validators.pattern('^[0-9+]*$'),
          Validators.required
        ]
      ),
      personInputControl: new FormControl(
        '',
        [
          Validators.pattern('^[1-6]$'),
          Validators.required
        ]
      ),
      commentInputControl: new FormControl(
        ''
      ),
      start: new FormControl(),
      end: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (!this.bookingForm.valid) {
      return;
    } else {
      this.bookingService.sendBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
        })
        .catch((rej) => {
          console.log(rej);
        });
      console.log(this.bookingForm.value);
    }
  }

}
