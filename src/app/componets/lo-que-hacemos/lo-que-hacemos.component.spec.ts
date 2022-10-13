import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueHacemosComponent } from './lo-que-hacemos.component';

describe('LoQueHacemosComponent', () => {
  let component: LoQueHacemosComponent;
  let fixture: ComponentFixture<LoQueHacemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoQueHacemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoQueHacemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
