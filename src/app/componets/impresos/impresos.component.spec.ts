import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresosComponent } from './impresos.component';

describe('ImpresosComponent', () => {
  let component: ImpresosComponent;
  let fixture: ComponentFixture<ImpresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
