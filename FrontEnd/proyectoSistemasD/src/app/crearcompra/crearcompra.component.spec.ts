import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcompraComponent } from './crearcompra.component';

describe('CrearcompraComponent', () => {
  let component: CrearcompraComponent;
  let fixture: ComponentFixture<CrearcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearcompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
