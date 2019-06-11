import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {
  apikey: any;

  constructor() { }

  ngOnInit() {
    
  }

  apiKey(){
    const apikey = 'AIzaSyA6LiJWVhYo5QCjlcKDZMEJHjmIZG8hVE8';
    return apikey;
  }
  

}
