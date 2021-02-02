import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagaComponent } from './maga.component';

describe('MagaComponent', () => {
  let component: MagaComponent;
  let fixture: ComponentFixture<MagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
