import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})

@Injectable()
export class ScrollComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.getAllHeadersInDocument();
  }

  getAllHeadersInDocument() {
    var matches = this.document.querySelectorAll("#indexable");
    console.log(matches);
  }

}
