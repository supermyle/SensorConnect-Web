import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensordataTableComponent } from './sensordata-table.component';

describe('SensordataTableComponent', () => {
  let component: SensordataTableComponent;
  let fixture: ComponentFixture<SensordataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensordataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensordataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
