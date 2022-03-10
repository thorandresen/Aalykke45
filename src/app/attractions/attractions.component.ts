import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {
  jsonObject: any;
  cardArray: any[] = [];
  titleText: string = '';
  faChevronRight = faChevronRight;

  constructor(private dataService: DataService) {
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.titleText = this.jsonObject.attractions.title;
      this.cardArray = this.jsonObject.attractions.cards;
    });
  }

  ngOnInit(): void {
  }

  changeSlide(slide: number): void {
    console.log(slide);
  }
}
