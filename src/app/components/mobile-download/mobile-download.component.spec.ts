import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDownloadComponent } from './mobile-download.component';

describe('MobileDownloadComponent', () => {
  let component: MobileDownloadComponent;
  let fixture: ComponentFixture<MobileDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
