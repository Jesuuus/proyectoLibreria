import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlamsComponent } from './alams.component';

describe('AlamsComponent', () => {
  let component: AlamsComponent;
  let fixture: ComponentFixture<AlamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
