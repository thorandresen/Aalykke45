import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

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

  constructor(private dataService: DataService, @Inject(DOCUMENT) private document: Document) {
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.titleText = this.jsonObject.attractions.title;
      this.cardArray = this.jsonObject.attractions.cards;
    });
  }

  ngOnInit(): void {
    this.handleSwipe();
  }

  changeSlide(slide: number): void {
    var cards = this.document.getElementsByClassName('attraction-card');
    var indicators = this.document.getElementsByClassName('attraction-indicator');
    var activeIndicator = this.document.querySelector('.attraction-indicator.active');
    var activeIndicatorID = activeIndicator?.id as string;

    // Remove active from active indicator and set hidden on active card.
    activeIndicator?.classList.toggle('active');
    cards[parseInt(activeIndicatorID)].classList.toggle('hidden');

    // Set active on new active indicator and remove hidden from active card.
    indicators[slide].classList.toggle('active');
    cards[slide].classList.toggle('hidden');
  }

  handleSwipe(): void {
    var touchstartX = 0
    var touchendX = 0

    const slider = document.getElementById('cards-container')

    if (slider == null) {
      return;
    }

    function handleGesture() {
      if (touchendX < touchstartX && (touchstartX - touchendX) > 50) {
        console.log("skrrt1");
      }
      if (touchendX > touchstartX && (touchendX - touchstartX) > 50) {
        console.log("skrrt2");
      }
    }

    slider.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    slider.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      handleGesture()
    })
  }
}
