import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  headerText: string = '';
  jsonObject: any;

  constructor(private dataService: DataService) {
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.headerText = this.jsonObject.header.text;
    });
  }

  ngOnInit(): void {
  }
}
