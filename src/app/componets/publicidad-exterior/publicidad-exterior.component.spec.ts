import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadExteriorComponent } from './publicidad-exterior.component';

describe('PublicidadExteriorComponent', () => {
  let component: PublicidadExteriorComponent;
  let fixture: ComponentFixture<PublicidadExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadExteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicidadExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
