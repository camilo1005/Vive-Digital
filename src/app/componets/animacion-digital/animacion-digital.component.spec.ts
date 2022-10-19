import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionDigitalComponent } from './animacion-digital.component';

describe('AnimacionDigitalComponent', () => {
  let component: AnimacionDigitalComponent;
  let fixture: ComponentFixture<AnimacionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacionDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
