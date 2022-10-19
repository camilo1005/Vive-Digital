import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPorDronComponent } from './video-por-dron.component';

describe('VideoPorDronComponent', () => {
  let component: VideoPorDronComponent;
  let fixture: ComponentFixture<VideoPorDronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPorDronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPorDronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
