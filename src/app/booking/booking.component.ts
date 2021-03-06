import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BookingService } from '../services/booking.service'
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  constructor(private dataService: DataService, private _bookingService: BookingService, @Inject(DOCUMENT) private document: Document) {
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
          Validators.required,
          Validators.email
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
      var bookingForm = this.document.getElementsByClassName('booking-form-container');
      var loadingForm = this.document.getElementsByClassName('loading-form-container');
      var finishedForm = this.document.getElementsByClassName('finished-form-container');
      var errorForm = this.document.getElementsByClassName('error-form-container');
      bookingForm[0].classList.add('hidden');
      loadingForm[0].classList.remove('hidden');
      errorForm[0].classList.add('hidden');

      this.bookingService.sendBooking(this.bookingForm.value)
        .then((res) => {
          loadingForm[0].classList.add('hidden');
          finishedForm[0].classList.remove('hidden');
        })
        .catch((rej) => {
          bookingForm[0].classList.remove('hidden');
          loadingForm[0].classList.add('hidden');
          errorForm[0].classList.remove('hidden');
        });
    }
  }

}
