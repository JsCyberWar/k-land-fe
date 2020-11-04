import { Component, OnInit } from '@angular/core';
import {faArrowDown, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowDown = faArrowDown;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 300){
        document.getElementById('tmNav').style.background = 'white';
      } else {
        document.getElementById('tmNav').style.background = 'transparent';
      }
    })
  }

  countdownDate: any = new Date("November 27, 2020 23:59:59").getTime();
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = this.countdownDate - now;
    this.days = Math.floor(distance/(1000*60*60*24));
    this.hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    this.minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    this.seconds = Math.floor((distance % (1000*60)) / 1000);
  });
  


}
