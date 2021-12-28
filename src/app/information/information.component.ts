import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  roomText: string = '';
  mainText: string = '';
  regardsText: string = '';
  signatureText: string = '';
  headerText: string = '';
  cardArray: any[] = [];
  jsonObject: any;

  constructor(private dataService: DataService) {
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.roomText = this.jsonObject.information.roomInformation;
      this.mainText = this.jsonObject.information.mainInformation;
      this.regardsText = this.jsonObject.information.regards;
      this.signatureText = this.jsonObject.information.signature;
      this.cardArray = this.jsonObject.information.images;
      this.headerText = this.jsonObject.information.header;
    });
  }

  ngOnInit(): void {
  }

}
