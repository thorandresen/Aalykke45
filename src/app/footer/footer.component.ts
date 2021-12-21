import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  jsonObject: any;
  emailText: string = '';
  phoneNumberText: string = '';
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(private dataService: DataService) {
    dataService.getData();
    dataService.eventCallback$.subscribe(data => {
      this.jsonObject = data;
      this.emailText = this.jsonObject.footer.email;
      this.phoneNumberText = this.jsonObject.footer.phoneNumber;
    });
  }

  ngOnInit(): void {
  }

}
