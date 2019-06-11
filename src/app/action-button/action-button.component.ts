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
  latitude: number;
  longtitude: number;
  status: any;
  batteryLevel: number;

  constructor() { }

  ngOnInit() {
    this.clickCounter = 0;
    // this.coordinates = 0;
    // this.message = '';
    // this.latitude;
    // this.longtitude;
    this.status = 'Safe';
    console.log(this.status);
  }

  counter() {
    this.clickCounter += 1;
    console.log(this.clickCounter);
    if(this.clickCounter>=5){
      this.activateAlert();
    }
  }

  cancelAlert(){
    this.clickCounter = 0;
    this.message = "Alert Canceled";
  }

  activateAlert(){
    console.log("alert activated")
    this.statusUpdate();
    this.getLocation();
    this.getBatteryLevel();
  }

  statusUpdate(){
    this.status = 'Unsafe';
    console.log("status changed")
  }

  getLocation() {
    // if(this.clickCounter < 5) {
    //   return;
    // }
    console.log("location activated")
    var x = document.getElementById("coordinates");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
      // this.latitude = position.coords.latitude;
      x.innerHTML = '<iframe id="googlemap" width="300" height="300" frameborder="0" style="border:0" src="https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitutde}&zoom=12&size=400x400&markers=color:red&key=AIzaSyA6LiJWVhYo5QCjlcKDZMEJHjmIZG8hVE8" allowfullscreen></iframe>';
      // x.innerHTML = "Latitude: " + position.coords.latitude +
      //   "<br>Longitude: " + position.coords.longitude;     
    }
  }

  getBatteryLevel() {
    navigator.getBattery().then(function(battery) {
      console.log(battery.level);
      document.getElementById("battery").innerHTML = battery.level;
      battery.addEventListener('levelchange', function() {
        console.log(this.level);
      });
    });
  }
}


