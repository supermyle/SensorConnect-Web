import { Component } from '@angular/core';
import { SensorRecord } from './models/sensor-record.module';
import sensorData from '../assets/sensordata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SensorConnect-Web';
  sensorRecords: SensorRecord[] = sensorData;
  displayedColumns: string[] = ['Date and Time', 'Temperature', 'Humidity', 'Voltage', 'Input On'];
  dataSource = this.sensorRecords;
}
