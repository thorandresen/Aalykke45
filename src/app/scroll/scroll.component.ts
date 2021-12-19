import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})

@Injectable()
export class ScrollComponent implements OnInit {
  headers: string[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.headers = this.getAllHeadersInDocument();
  }

  getAllHeadersInDocument(): string[] {
    let headerList: string[] = [];

    window.addEventListener('DOMContentLoaded', () => {
      var matches = this.document.querySelectorAll(".indexable");
      matches.forEach((element) => {
        headerList.push(element.id);
      })
    });

    return headerList;
  }

}
