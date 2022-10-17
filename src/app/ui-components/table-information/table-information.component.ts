import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.css']
})
export class TableInformationComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
