import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDataCardComponent } from './sample-data-card.component';

describe('SampleDataCardComponent', () => {
  let component: SampleDataCardComponent;
  let fixture: ComponentFixture<SampleDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDataCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
