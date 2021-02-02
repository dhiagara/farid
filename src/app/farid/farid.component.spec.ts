import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaridComponent } from './farid.component';

describe('FaridComponent', () => {
  let component: FaridComponent;
  let fixture: ComponentFixture<FaridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
