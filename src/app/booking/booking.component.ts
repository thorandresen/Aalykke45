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

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private dataService: DataService) {
    dataService.getData();
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
    });
  }

  ngOnInit(): void {
  }

}
