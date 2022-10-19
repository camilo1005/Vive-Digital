import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalWebComponent } from './digital-web.component';

describe('DigitalWebComponent', () => {
  let component: DigitalWebComponent;
  let fixture: ComponentFixture<DigitalWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
