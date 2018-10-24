import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcountrystateComponent } from './addcountrystate.component';

describe('AddcountrystateComponent', () => {
  let component: AddcountrystateComponent;
  let fixture: ComponentFixture<AddcountrystateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcountrystateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcountrystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
