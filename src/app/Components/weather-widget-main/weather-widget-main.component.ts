import { Component, OnInit, Input, Output } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';

export type WeatherData = {
  temp_faren: string;
  temp_min: string;
  temp_max: string;
  temp_feels_like: string;
  name: string;
  humidity: number;
  sunset_time: string;
  isDay: boolean;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  };
  sys: { sunset: number };
  weather_description: string;
  weather_id: number;
};

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ left: '-20px', opacity: 0.6 }),
        animate('500ms', style({ left: '0px', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ right: '10px', opacity: 0 })),
      ]),
    ]),
  ],
})
export class WeatherWidgetMainComponent implements OnInit {
  @Input() currentWeatherData: any;
  @Input() allWeatherData: any[] = [];

  constructor() {}

  ngOnInit() {}

  showIcon(currentWeatherData: any) {
    if (
      currentWeatherData.weather[0].id > 200 &&
      currentWeatherData.weather[0].id < 300
    ) {
      return 'fa-solid fa-cloud-bolt fa-3x cloud';
    } else if (
      currentWeatherData.weather[0].id >= 300 &&
      currentWeatherData.weather[0].id < 600
    ) {
      return 'fa-solid fa-cloud-rain fa-3x cloud';
    } else if (
      currentWeatherData.weather[0].id >= 600 &&
      currentWeatherData.weather[0].id < 700
    ) {
      return 'fa-solid fa-cloud-meatball fa-3x cloud';
    } else if (
      currentWeatherData.weather[0].id >= 800 &&
      currentWeatherData.weather[0].id < 900
    ) {
      return 'fas fa-cloud fa-3x cloud';
    } else {
      return 'fa-solid fa-wind fa-3x cloud';
    }
  }

  remove(index: number) {
    this.allWeatherData.splice(index, 1);
  }
}
