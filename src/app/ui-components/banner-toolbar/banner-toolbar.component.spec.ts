import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerToolbarComponent } from './banner-toolbar.component';

describe('BannerToolbarComponent', () => {
  let component: BannerToolbarComponent;
  let fixture: ComponentFixture<BannerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
