import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
  cardArray: any[] = [];
  jsonObject: any;

  constructor(private dataService: DataService) {
    dataService.getData();
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.roomText = this.jsonObject.information.roomInformation;
      this.mainText = this.jsonObject.information.mainInformation;
      this.regardsText = this.jsonObject.information.regards;
      this.signatureText = this.jsonObject.information.signature;
      this.cardArray = this.jsonObject.information.images;
    });
  }

  ngOnInit(): void {
  }

}
