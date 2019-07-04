import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { ApikeyComponent } from '../apikey/apikey.component';

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
  longitude: number;
  status: any;
  batteryLevel: number;

  constructor() { }

  ngOnInit() {
    this.clickCounter = 0;
    // this.coordinates = 0;
    this.message = '';
    // this.latitude;
    // this.longitude;
    this.status = 'Safe';
    document.getElementById('alertMode').innerHTML = 'Mode | ' + this.status;
    this.deviceOn();
    this.getLocation();
  }

  counter() {
    this.clickCounter += 1;
    console.log(this.clickCounter);
    if (this.clickCounter >= 5) {
      this.activateAlert();
    }
  }

  cancelAlert() {
    this.clickCounter = 0;
    this.message = 'Alert Canceled';
    this.status = 'Safe';
    document.getElementById('alertMode').innerHTML = 'Mode | ' + this.status;
  }

  activateAlert() {
    console.log('alert activated');
    this.statusUpdate();
    this.getLocation();
    this.getBatteryLevel();
    this.deviceOn();
  }

  statusUpdate() {
    this.status = 'Unsafe';
    console.log('status changed');
    document.getElementById('alertMode').innerHTML = 'Mode | ' + this.status;
  }

  getLocation() {
    // if(this.clickCounter < 5) {
    //   return;
    // }
    console.log('location activated');
    var x = document.getElementById('coordinates');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }  else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }

    function showPosition(position) {
      console.log('Lat:  '+position.coords.latitude+' Long: '+ position.coords.longitude);

      x.innerHTML =
      '<iframe id = "googlemap" width = "300" height = "300" frameborder="0" style = "border: 0" src = "https://maps.googleapis.com/maps/api/staticmap?center=' 
      +
      position.coords.latitude + ',' +
      position.coords.longitude +
      '&zoom=12&size=400x400&key=AIzaSyA6LiJWVhYo5QCjlcKDZMEJHjmIZG8hVE8" allowfullscreen></iframe>';

      document.getElementById("GPS").innerHTML = ' Latitude | ' + position.coords.latitude + '<br> Long | ' + position.coords.longitude;
    }
   
  }

  deviceOn() {
    console.log('Device Status | ' + navigator.onLine);
    if (navigator.onLine) {
      document.getElementById('deviceOn').innerHTML = 'Device | On';
    } else {
      document.getElementById('deviceON').innerHTML = 'Device | Off';
    }
  }

  getBatteryLevel() {
    
    // navigator.battery
    // navigator.getBattery().then(function(battery) {
    //   console.log(battery.level);
    //   document.getElementById("battery").innerHTML = 'Battery-Level: ' + battery.level;
    //   battery.addEventListener('levelchange', function() {
    //     console.log(this.level);
    //   });
    // });
  }
}


/// FROM GETLOCATION METHOD
// const key = ApikeyComponent.apiKey();
      // console.log(key);
// With API bootstrapped      
      // x.innerHTML = '<iframe id="googlemap" width="300" height="300" frameborder="0" style="border:0" src="https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=12&size=400x400&markers=color:red&key={{key}}" allowfullscreen></iframe>';
      
// With API declared
      // x.innerHTML = '<iframe id="googlemap" width="300" height="300" frameborder="0" style="border:0" src="https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=12&size=400x400&markers=color:red&key=AIzaSyA6LiJWVhYo5QCjlcKDZMEJHjmIZG8hVE8" allowfullscreen></iframe>';

    // different interpolation


