import { Component, ViewChild } from '@angular/core';
import { SensorRecord } from '../../models/sensor-record.module';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import sensorData from '../../../assets/sensordata.json';


@Component({
  selector: 'app-sensordata-table',
  templateUrl: './sensordata-table.component.html',
  styleUrls: ['./sensordata-table.component.css']
})
export class SensordataTableComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['Date and Time', 'Temperature', 'Humidity', 'Voltage', 'Input On'];
  SENSOR_DATA: SensorRecord[] = sensorData;
  dataSource!: MatTableDataSource<SensorRecord>;
  pageSizes = [5,10,15];

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.SENSOR_DATA);
    this.dataSource.paginator = this.paginator;
  }
}
