import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  jsonObject: any;
  weekText: string = '';
  weekendText: string = '';
  nameinput: string = '';
  emailinput: string = '';
  phoneinput: string = '';
  personsinput: number = 0;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private dataService: DataService) {
    dataService.getData();
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.weekText = this.jsonObject.booking.weekPrice;
      this.weekendText = this.jsonObject.booking.weekendPrice;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.nameinput);
    console.log(this.emailinput);
    console.log(this.phoneinput);
    console.log(this.personsinput);
    console.log(this.range.value)
  }

}
