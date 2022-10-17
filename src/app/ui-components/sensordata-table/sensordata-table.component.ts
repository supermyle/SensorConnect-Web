import { Component, OnInit } from '@angular/core';
import { SensorRecord } from '../../models/sensor-record.module';
import sensorData from '../../../assets/sensordata.json';

const SENSOR_DATA: SensorRecord[] = sensorData;

@Component({
  selector: 'app-sensordata-table',
  templateUrl: './sensordata-table.component.html',
  styleUrls: ['./sensordata-table.component.css']
})
export class SensordataTableComponent implements OnInit {
  displayedColumns: string[] = ['Date and Time', 'Temperature', 'Humidity', 'Voltage', 'Input On'];
  dataSource = SENSOR_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
