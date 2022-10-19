import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoarquitecturaComponent } from './infoarquitectura.component';

describe('InfoarquitecturaComponent', () => {
  let component: InfoarquitecturaComponent;
  let fixture: ComponentFixture<InfoarquitecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoarquitecturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoarquitecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
