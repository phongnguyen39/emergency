import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
  clickCounter: any;
  coordinates: any;
  message: string;

  constructor() { }

  ngOnInit() {
    this.clickCounter = 0;
    // this.coordinates = 0;
    this.message = '';
  }

  counter() {
    this.clickCounter += 1;
    if (this.clickCounter == 5) {
      console.log(this.clickCounter);
      console.log("1" + this.coordinates);
    }
  }

  cancelAlert(){
    this.clickCounter = 0;
    this.message = "Alert Canceled";
  }

  // geoCoordinates(position) {
  //   console.log("geoCoordinates worked")
  //   console.log("2"+navigator.geolocation);
  //   console.log(Object.values(navigator.geolocation));
  //   if (navigator.geolocation != null) {
  //     this.coordinates = position.coords.latitude + ' ' + position.coords.longitude;
  //     console.log(this.coordinates);
  //     console.log(navigator.geolocation.getCurrentPosition(position));
  //   } else {
  //     console.log("snazzy")
  //     this.coordinates = "Geolocation is not supported by this browser.";
  //   }

  //   function showPosition(position) {
  //     console.log('showPosition called');
  //     this.coordinates = "Latitude: " + position.coords.latitude + 
  //     "<br>Longitude: " + position.coords.longitude; 
  //     console.log(coordinates);
  //   }
  // }


  getLocation() {
    var x = document.getElementById("demo");

    alert("foo")
    console.log("methodcalled")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }

  }
}


