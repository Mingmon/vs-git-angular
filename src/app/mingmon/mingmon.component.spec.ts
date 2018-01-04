import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MingmonComponent } from './mingmon.component';

describe('MingmonComponent', () => {
  let component: MingmonComponent;
  let fixture: ComponentFixture<MingmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MingmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MingmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
