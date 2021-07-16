import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedialogconfirmComponent } from './updatedialogconfirm.component';

describe('UpdatedialogconfirmComponent', () => {
  let component: UpdatedialogconfirmComponent;
  let fixture: ComponentFixture<UpdatedialogconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedialogconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedialogconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
